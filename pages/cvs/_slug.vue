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
