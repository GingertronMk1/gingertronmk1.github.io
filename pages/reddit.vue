<template>
  <div v-if="leaderboard">
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
    <template v-if="leaderboard">
      <div v-if="activeRound === null">
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
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "RedditPage",
  props: {},
  data({ $config }) {
    return {
      allRounds: require("assets/json/threads.json"),
      allRoundsLoaded: {},
      activeRound: null,
    };
  },
  computed: {
    leaderboard() {
      if (this.allRoundsProcessed) {
        const ret = [];
        const mapped = Object.values(this.allRoundsProcessed)
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
      return null;
    },
    allRoundsProcessed() {
      const arl = this.allRoundsLoaded;
      const gpfr = this.getPointsFromRound;
      const gpt = this.getProcessedThreads;
      if (
        arl !== null &&
        Object.keys(arl).length === Object.keys(this.allRounds).length
      ) {
        const ret = {};
        Object.entries(arl).forEach(([key, value]) => {
          ret[key] = gpfr(gpt(value))
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
  },
  mounted() {
    const allRoundsLoaded = {};
    Object.entries(this.allRounds).forEach(async (entry) => {
      const [key, value] = entry;
      allRoundsLoaded[key] = await this.getThreads(value);
    });
    this.allRoundsLoaded = allRoundsLoaded;
  },
  methods: {
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

  table,
  td,
  th {
    border: 1px solid black;
  }

  td,
  th {
    padding: 0.5rem;
  }
}
</style>
