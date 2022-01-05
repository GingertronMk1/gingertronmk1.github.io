<template>
  <footer class="footer">
    <div class="footer__column footer__socials">
      <span v-for="(social, index) in socials" :key="`social-${index}`">
        <i :class="social.class" />
        <a :href="social.url" target="_blank" v-text="social.name" />
      </span>
    </div>
    <div class="footer__column">
      <div class="footer__credit">
        This website is built using Nuxt and hosted on GitHub Pages. To see the
        source code click
        <a
          href="https://github.com/gingertronmk1/gingertronmk1.github.io"
          target="_blank"
          v-text="`here`"
        />
      </div>
    </div>
    <div class="footer__column">
      &copy; Jack Ellis {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      socials: [
        {
          name: "Twitter",
          url: "https://www.twitter.com/GingertronMk1",
          class: "fab fa-twitter",
        },
        {
          name: "GitHub",
          url: "https://www.github.com/GingertronMk1",
          class: "fab fa-github",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jackellis1504",
          class: "fab fa-linkedin",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.footer {
  @include flex(row, space-between, stretch);
  background-color: $grey-2;
  color: $white;
  margin-top: 1rem;

  * {
    color: inherit;
  }

  &__column {
    @include flex(column, flex-end, stretch);
    flex: 1;
    min-width: 1px;
    padding: 1rem;
    text-align: center;

    &:first-of-type {
      text-align: left;
    }

    &:last-of-type {
      text-align: right;
    }

    > * {
      text-align: inherit;
    }
  }

  &__socials {
    a {
      text-decoration: none;
    }

    span + span {
      margin-top: 0.5rem;
    }
  }

  &__credit {
    font-size: 0.7rem;
  }
}
</style>
