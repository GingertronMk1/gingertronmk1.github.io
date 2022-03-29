<script setup>
import HeroHeader from "@/components/HeroHeader.vue";
import { ref } from "vue";
import * as d3 from "d3";

const allRounds = require("@/assets/json/threads.json");

function getAllRounds() {
  const allRoundsLoaded = {};
  for (const entry of Object.entries(allRounds)) {
    const [key, value] = entry;
    allRoundsLoaded[key] = getThreads(value);
  }
  return allRoundsLoaded;
}

function generateLeaderboard(rounds) {
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
}

function generateRoundByRound(rounds) {
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
}

function processRounds(rounds) {
  const arl = rounds;
  if (
    arl !== null &&
    Object.keys(arl).length === Object.keys(allRounds).length
  ) {
    const ret = {};
    Object.entries(arl).forEach(([key, value]) => {
      ret[key] = getPointsFromRound(getProcessedThreads(value))
        .slice(0, 3)
        .map((thread, index) => ({
          ...thread,
          ros_points: 3 - index,
        }));
    });
    return ret;
  }
  return {};
}

function getProcessedThreads(round) {
  const ret = {};
  Object.entries(round).forEach((entry) => {
    const [key, value] = entry;
    ret[key] = sortFilterThread(value);
  });
  return ret;
}

function sortFilterThread(thread) {
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
}

function getPointsFromRound(round) {
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
}

function getEveryonesTopComments(rounds) {
  return Object.values(rounds)
    .map((round) => {
      return Object.values(round).flat();
    })
    .flat()
    .map(getAllComments)
    .flat()
    .filter(({ score }) => score > 1)
    .sort((a, b) => b.score - a.score)
    .reduce((acc, curr) => {
      if (!acc.map(({ author }) => author).includes(curr.author)) {
        acc.push(curr);
      }
      return acc;
    }, []);
}

function getAllComments(comment) {
  let ret = [];
  if (comment.replies) {
    ret.push(...comment.replies.data.children);
    comment.replies.data.children.forEach((child) => {
      ret.push(...getAllComments(child));
    });
  }
  ret = ret.map(({ data }) => data);
  ret.push(comment);
  return ret;
}

function getThreads(threadIDs) {
  const allThreads = [];
  const allThreadsInit = require.context(
    "@/assets/json/threads",
    true,
    /\.json$/
  );
  allThreadsInit.keys().forEach((key) => {
    const keyReplaced = key.replace(/^\.\/(.*)\.json$/, "$1");
    if (threadIDs.includes(keyReplaced)) {
      const [topLevel, comments] = allThreadsInit(key);
      const children = comments?.data?.children || false;
      const { id } = topLevel?.data?.children[0]?.data || false;
      if (id && children) {
        allThreads.push(children.map(({ data }) => data));
      }
    }
  });
  return allThreads;
}

function generateChart(rounds) {
  console.log("generating chart");
  console.table(rounds);
  const xyChart = d3XYChart()
    .width(960)
    .height(500)
    .xlabel("X Axis")
    .ylabel("Y Axis");
  const select = d3.select("#d3_graph");
  select.append("svg").datum(rounds).call(xyChart);

  function d3XYChart() {
    let width = 940;
    let height = 480;
    let xlabel = "Round";
    let ylabel = "Points";

    function chart(selection) {
      console.table(selection);
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

        const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(labels);
        window.colorScale = colorScale;

        const xAxis = d3.axisBottom(xScale);

        const yAxis = d3.axisLeft(yScale);

        const xGrid = d3
          .axisBottom(xScale)
          .tickSize(-innerheight)
          .tickFormat("");

        const yGrid = d3.axisLeft(yScale).tickSize(-innerwidth).tickFormat("");

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
          .attr("stroke", ({ author }) => colorScale(author));

        svg
          .selectAll("legend")
          .data([
            labels.sort((a, b) =>
              a.toLowerCase().localeCompare(b.toLowerCase())
            ),
          ])
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
          .style("fill", (d) => colorScale(d));

        // Add one dot in the legend for each name.
        svg
          .selectAll("mylabels")
          .data(labels)
          .enter()
          .append("text")
          .attr("x", 25 + size * 1.2)
          .attr("y", (d, i) => 25 + i * (size + 5) + size / 2) // 100 is where the first dot appears. 25 is the distance between dots
          .style("fill", (d) => colorScale(d))
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
}

console.log("Loading rounds");
const allRoundsLoaded = ref(getAllRounds());
console.table(allRoundsLoaded);
console.log("Processing rounds");
const allRoundsProcessed = ref(processRounds(allRoundsLoaded.value));
console.log("Generating leaderboard");
const leaderboard = ref(generateLeaderboard(allRoundsProcessed.value));
console.log("Generating round by round");
const roundByRound = ref(generateRoundByRound(allRoundsProcessed.value));
console.log("Getting everyones top comments");
const everyonesTopComments = ref(
  getEveryonesTopComments(allRoundsLoaded.value)
);

const activeRound = ref(null);

setTimeout(() => generateChart(roundByRound.value), 100);
</script>
<template>
  <HeroHeader>Redditor of Steel</HeroHeader>
  <div class="d-flex flex-row my-3">
    <button
      :class="{
        btn: true,
        'btn-primary': activeRound === null,
        'btn-outline-primary': activeRound !== null,
      }"
      @click.prevent="activeRound = null"
    >
      Show All
    </button>
    <button
      v-for="(threads, index) in allRounds"
      :key="index"
      :class="{
        'btn-primary': activeRound === index,
        'btn-outline-primary': activeRound !== index,
        'btn ms-2': true,
      }"
      @click.prevent="activeRound = index"
      v-text="index"
    />
  </div>
  <div v-show="activeRound === null" id="leaderboard">
    <div class="d-flex flex-row items-stretch">
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
    <hr />
    <h1>Everyone's Top Comment (Including Replies)</h1>
    <table>
      <thead>
        <tr>
          <th width="25%">User</th>
          <th width="45%">Comment</th>
          <th width="15%">Score</th>
          <th width="15%">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(comment, index) in everyonesTopComments"
          :key="`comment-${index}`"
        >
          <td v-text="comment.author" />
          <td v-text="comment.body" />
          <td v-text="comment.score" />
          <td>
            <a
              :href="`https://np.reddit.com${comment.permalink}`"
              target="_blank"
              >Link</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- TOP PEOPLE'S TOP COMMENTS PER ROUND -->
  <div
    v-if="activeRound !== null"
    class="vue_utilities-redditorOfSteel__round-summary"
  >
    <table cellspacing="0">
      <template
        v-for="(user, outerIndex) in allRoundsProcessed[activeRound]"
        :key="`outer${outerIndex}`"
      >
        <tr v-if="outerIndex !== 0">
          &nbsp;
        </tr>
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
      </template>
    </table>
  </div>
</template>

<style lang="scss">
td {
  padding: 0.2rem 0.5rem;
}
</style>
