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
        v-for="(threads, index) in allThreads"
        :key="index"
        class="button"
        @click.prevent="getThreads(threads)"
        v-text="index"
      />
    </div>
    <table
      v-for="(user, outerIndex) in pointsFromRound.slice(0, 3)"
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
</template>
<script>
export default {
  name: "RedditPage",
  props: {},
  data({ $config }) {
    return {
      threadValues: {},
      allThreads: require("assets/json/threads.json"),
      loading: false,
    };
  },
  computed: {
    processedThreads() {
      const ret = {};
      Object.entries(this.threadValues).forEach((entry) => {
        const [key, value] = entry;
        ret[key] = this.sortFilterThread(value);
      });
      return ret;
    },
    pointsFromRound() {
      return Object.values(this.processedThreads)
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
  },
  methods: {
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
    getThreads(threadIDs) {
      this.loading = true;
      const promises = threadIDs.map((threadID) =>
        this.$axios.get(
          `https://api.reddit.com/r/superleague/comments/${threadID}`
        )
      );
      Promise.all(promises).then((responses) => {
        const ret = {};
        responses.forEach((response) => {
          const { data } = response;
          console.log(data);
          const [topLevel, comments] = data;
          const children = comments?.data?.children || false;
          const { id } = topLevel?.data?.children[0]?.data || false;
          console.log(id, children);
          if (id && children) {
            ret[id] = children.map(({ data }) => data);
          }
        });
        this.threadValues = ret;
        this.loading = false;
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
