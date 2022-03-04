<template>
  <div>
    <HeroHeader>Redditor of Steel</HeroHeader>
    <a
      href="https://reddit.com/r/superleague/search?q=Match+Thread&restrict_sr=on&sort=new"
      target="_blank"
      >Search for Match Threads</a
    >
    <div class="reddit__round-buttons">
      <button
        :class="{
          button: true,
          'button--secondary': activeRound !== null,
        }"
        @click.prevent="activeRound = null"
      >
        Show All
      </button>
      <button
        v-for="(threads, index) in allRounds"
        :key="index"
        :class="{
          button: true,
          'button--secondary': activeRound !== index,
        }"
        @click.prevent="activeRound = index"
        v-text="index"
      />
    </div>
    <div v-show="activeRound === null" id="leaderboard">
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>RoS Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(line, index) in leaderboard" :key="`leader${index}`">
            <td v-text="line.name" />
            <td v-text="line.points" />
          </tr>
        </tbody>
      </table>
      <div id="d3_graph" ref="d3_graph"></div>
    </div>
    <div v-if="activeRound !== null" class="reddit__round-summary">
      <table
        v-for="(user, outerIndex) in allRoundsProcessed[activeRound]"
        :key="`outer${outerIndex}`"
        cellspacing="0"
      >
        <thead>
          <tr>
            <th width="60%">User: {{ user.author }}</th>
            <th>Total: {{ user.score }}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(comment, index) in user.comments"
            :key="`${outerIndex}-${index}`"
          >
            <td v-text="comment.body" />
            <td v-text="`${comment.score} points`" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import * as d3 from "d3";

export default {
  name: "RedditPage",
  props: {},
  data() {
    return {
      allRounds: require("assets/json/threads.json"),
      allRoundsLoaded: {},
      activeRound: null,
      leaderboard: null,
      allRoundsProcessed: null,
      roundByRound: null,
    };
  },
  async fetch() {
    const allRoundsLoaded = await this.getAllRounds();
    const allRoundsProcessed = this.processRounds(allRoundsLoaded);
    const leaderboard = this.generateLeaderboard(allRoundsProcessed);
    const roundByRound = this.generateRoundByRound(allRoundsProcessed);
    this.allRoundsLoaded = allRoundsLoaded;
    this.allRoundsProcessed = allRoundsProcessed;
    this.leaderboard = leaderboard;
    this.roundByRound = roundByRound;

    this.generateChart(roundByRound);
  },
  methods: {
    async getAllRounds() {
      const allRoundsLoaded = {};
      for (const entry of Object.entries(this.allRounds)) {
        const [key, value] = entry;
        allRoundsLoaded[key] = await this.getThreads(value);
      }
      return allRoundsLoaded;
    },
    generateLeaderboard(rounds) {
      const ret = [];
      const mapped = Object.values(rounds)
        .flat()
        .reduce((acc, value) => {
          if (acc[value.author]) {
            acc[value.author] += value.ros_points;
          } else {
            acc[value.author] = value.ros_points;
          }
          return acc;
        }, {});

      Object.entries(mapped).forEach(([key, value]) => {
        ret.push({
          name: key,
          points: value,
        });
      });

      return ret.sort((a, b) => b.points - a.points);
    },
    generateRoundByRound(rounds) {
      const allUsers = [
        ...new Set(
          Object.values(rounds)
            .flat()
            .map(({ author }) => author)
        ),
      ].map((author) => ({
        author,
        scores: [0],
        rounds: [0],
      }));

      Object.values(rounds).forEach((round, index) => {
        allUsers.forEach((user) => {
          const userScore = round.find(({ author }) => author === user.author);
          const mostRecentScore = user.scores[index];
          if (userScore) {
            user.scores.push(mostRecentScore + userScore.ros_points);
          } else {
            user.scores.push(mostRecentScore);
          }
          user.rounds.push(index + 1);
        });
      });
      return allUsers;
    },
    processRounds(rounds) {
      const arl = rounds;
      if (
        arl !== null &&
        Object.keys(arl).length === Object.keys(this.allRounds).length
      ) {
        const ret = {};
        Object.entries(arl).forEach(([key, value]) => {
          ret[key] = this.getPointsFromRound(this.getProcessedThreads(value))
            .slice(0, 3)
            .map((thread, index) => ({
              ...thread,
              ros_points: 3 - index,
            }));
        });
        return ret;
      }
      return {};
    },
    getProcessedThreads(round) {
      const ret = {};
      Object.entries(round).forEach((entry) => {
        const [key, value] = entry;
        ret[key] = this.sortFilterThread(value);
      });
      return ret;
    },
    sortFilterThread(thread) {
      return thread
        .sort((a, b) => {
          return b.score - a.score;
        })
        .reduce((acc, curr) => {
          if (!acc.map(({ author }) => author).includes(curr.author)) {
            acc.push(curr);
          }
          return acc;
        }, [])
        .map(({ author, score, body }) => ({ author, score, body }));
    },
    getPointsFromRound(round) {
      return Object.values(round)
        .flat()
        .reduce((acc, val) => {
          const i = acc.findIndex(({ author }) => author === val.author);
          if (i > -1) {
            acc[i].score += val.score;
            acc[i].comments.push({
              body: val.body,
              score: val.score,
            });
          } else {
            val.comments = [{ body: val.body, score: val.score }];
            delete val.body;
            acc.push(val);
          }
          return acc;
        }, [])
        .sort((a, b) => b.score - a.score);
    },
    async getThreads(threadIDs) {
      const promises = threadIDs.map((threadID) =>
        this.$axios.get(
          `https://api.reddit.com/r/superleague/comments/${threadID}`
        )
      );
      return await Promise.all(promises).then((responses) => {
        const ret = {};
        responses.forEach((response) => {
          const { data } = response;
          const [topLevel, comments] = data;
          const children = comments?.data?.children || false;
          const { id } = topLevel?.data?.children[0]?.data || false;
          if (id && children) {
            ret[id] = children.map(({ data }) => data);
          }
        });
        return ret;
      });
    },

    generateChart(rounds) {
      const xyChart = d3XYChart()
        .width(960)
        .height(500)
        .xlabel("X Axis")
        .ylabel("Y Axis");
      const ref = this.$refs.d3_graph;
      const select = d3.select(ref);
      select.append("svg").datum(rounds).call(xyChart);

      function d3XYChart() {
        let width = document.getElementById("d3_graph").clientWidth;
        let height = 480;
        let xlabel = "Round";
        let ylabel = "Points";

        function chart(selection) {
          selection.each(function (datasets) {
            const labels = [...new Set(datasets.map(({ author }) => author))];
            //
            // Create the plot.
            //
            const margin = { top: 20, right: 80, bottom: 30, left: 50 };
            const innerwidth = width - margin.left - margin.right;
            const innerheight = height - margin.top - margin.bottom;

            const xScale = d3
              .scaleLinear()
              .range([0, innerwidth])
              .domain([
                d3.min(datasets, ({ rounds }) => d3.min(rounds)),
                d3.max(datasets, ({ rounds }) => d3.max(rounds)),
              ]);

            const yScale = d3
              .scaleLinear()
              .range([innerheight, 0])
              .domain([
                d3.min(datasets, ({ scores }) => d3.min(scores)),
                d3.max(datasets, ({ scores }) => d3.max(scores)),
              ]);

            const colorScale = d3
              .scaleOrdinal(d3.schemeCategory10)
              .domain(d3.range(datasets.length));

            const xAxis = d3.axisBottom(xScale);

            const yAxis = d3.axisLeft(yScale);

            const xGrid = d3
              .axisBottom(xScale)
              .tickSize(-innerheight)
              .tickFormat("");

            const yGrid = d3
              .axisLeft(yScale)
              .tickSize(-innerwidth)
              .tickFormat("");

            const drawLine = d3
              .line()
              .x((d) => xScale(d[0]))
              .y((d) => yScale(d[1]));

            const svg = d3
              .select(this)
              .attr("width", width)
              .attr("height", height)
              .append("g")
              .attr(
                "transform",
                "translate(" + margin.left + "," + margin.top + ")"
              );

            svg
              .append("g")
              .attr("class", "x grid")
              .attr("transform", "translate(0," + innerheight + ")")
              .call(xGrid);

            svg.append("g").attr("class", "y grid").call(yGrid);

            svg
              .append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + innerheight + ")")
              .call(xAxis)
              .append("text")
              .attr("dy", "-.71em")
              .attr("x", innerwidth)
              .style("text-anchor", "end")
              .text(xlabel);

            svg
              .append("g")
              .attr("class", "y axis")
              .call(yAxis)
              .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", "0.71em")
              .style("text-anchor", "end")
              .text(ylabel);

            const dataLines = svg
              .selectAll(".d3XYChart_line")
              .data(
                datasets.map((d) => ({
                  author: d.author,
                  coords: d3.zip(d.rounds, d.scores),
                }))
              )
              .enter()
              .append("g")
              .attr("class", "d3XYChart_line");

            dataLines
              .append("path")
              .style("fill", "none")
              .attr("stroke-width", 5)
              .attr("class", "line")
              .attr("d", ({ coords }) => drawLine(coords))
              .attr("stroke", ({ author }) =>
                colorScale(labels.indexOf(author))
              );

            svg
              .selectAll("legend")
              .data([labels])
              .enter()
              .append("rect")
              .attr("x", 10)
              .attr("y", 10)
              .attr("width", 210)
              .attr("height", (d) => (d.length + 1) * 25)
              .style("fill", "white");

            // Add one dot in the legend for each name.
            const size = 20;
            svg
              .selectAll("mydots")
              .data(labels)
              .enter()
              .append("rect")
              .attr("x", 25)
              .attr("y", (d, i) => 25 + i * (size + 5)) // 100 is where the first dot appears. 25 is the distance between dots
              .attr("width", size)
              .attr("height", size)
              .style("fill", (d) => colorScale(labels.indexOf(d)));

            // Add one dot in the legend for each name.
            svg
              .selectAll("mylabels")
              .data(labels)
              .enter()
              .append("text")
              .attr("x", 25 + size * 1.2)
              .attr("y", (d, i) => 25 + i * (size + 5) + size / 2) // 100 is where the first dot appears. 25 is the distance between dots
              .style("fill", (d) => colorScale(labels.indexOf(d)))
              .text((d) => d)
              .attr("text-anchor", "left")
              .style("alignment-baseline", "middle");
          });
        }

        chart.width = function (value) {
          if (!arguments.length) return width;
          width = value;
          return chart;
        };

        chart.height = function (value) {
          if (!arguments.length) return height;
          height = value;
          return chart;
        };

        chart.xlabel = function (value) {
          if (!arguments.length) return xlabel;
          xlabel = value;
          return chart;
        };

        chart.ylabel = function (value) {
          if (!arguments.length) return ylabel;
          ylabel = value;
          return chart;
        };

        return chart;
      }
    },
  },
};
</script>

<style lang="scss">
.reddit {
  & > * + * {
    margin-top: 1rem;
  }

  &__round-buttons {
    @include flex(row, flex-start, stretch);
    flex-wrap: wrap;
    & > * + * {
      margin-left: 1rem;
    }
  }

  &__round-summary {
    @include flex(column, flex-start, stretch);
    & > table + table {
      margin-top: 1rem;
    }
  }

  table {
    border-spacing: 0;
  }

  table,
  td,
  th {
    border: 1px solid black;
  }

  td,
  th {
    padding: 0.5rem;
  }

  #d3-graph {
    height: 100px;
  }
}
</style>
