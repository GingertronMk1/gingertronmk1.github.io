<template>
  <article>
    <HeroHeader>{{ page.title }}</HeroHeader>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  name: "CVPage",
  async asyncData({ $content, params }) {
    const page = await $content("cvs", params.slug).fetch();
    const education = await $content("cvs", "education").fetch();
    const pageBodyChildren = page?.body?.children;
    if (pageBodyChildren) {
      const educationIndex = pageBodyChildren.findIndex(({ children }) => {
        return (
          Array.isArray(children) &&
          children.filter(({ type, value }) => {
            return type === "text" && value === "!!!EDUCATION!!!";
          }).length > 0
        );
      });

      if (educationIndex > -1) {
        page.body.children = [
          ...pageBodyChildren.slice(0, educationIndex),
          ...education.body.children,
          ...pageBodyChildren.slice(educationIndex + 1),
        ];
      }
    }

    return {
      page,
    };
  },
};
</script>

<style lang="scss">
.cvs-slug {
  &__skills-lists {
    @include flex(row, space-between, stretch);
  }

  &__skills-list {
    @include flex(column, flex-start, stretch);
    flex: 1;
    margin-bottom: 1rem;

    ul {
      margin-left: 1rem;
    }
  }

  .nuxt-content {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
