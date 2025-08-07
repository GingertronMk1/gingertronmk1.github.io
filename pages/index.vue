<script setup lang="ts">
useHead({
  title: "Jack Ellis"
});

const links = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/jackellis1504/"
  },
  {
    title: "GitHub",
    url: "https://www.github.com/gingertronmk1"
  },
  {
    title: "This website's code",
    url: "https://github.com/GingertronMk1/gingertronmk1.github.io"
  }
]
</script>
<template>
  <div class="space-y-4">

    <h1 class="text-4xl">Hi, I'm Jack</h1>
    <section id="about-me">
      <h3 class="text-2xl">About Me</h3>
      I'm a web developer and general-purpose nerd based in the East Midlands.
      This website is intended as a broad repository/portfolio of me, my projects, and my CV.
    </section>
    <section id="links">
      <h3 class="text-2xl">Some Links</h3>
      <ul class="list-disc list-inside [&_a]:underline">
        <li v-for="link in links" :key="link.url">
          <a :href="link.url" v-text="link.title" target="_blank"/>
        </li>
      </ul>
    </section>
  </div>
</template>