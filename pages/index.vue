<script setup>
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
    <h1>Hi, I'm Jack</h1>
    <section id="about-me">
        <h3>About Me</h3>
        I'm a web developer and general-purpose nerd based in the East Midlands.
        This website is intended as a broad repository/portfolio of me, my projects, and my CV.
    </section>
    <section id="links">
        <h3>Some Links</h3>
        <ul>
            <li v-for="link in links" :key="JSON.stringify(link)">
                <a :href="link.url" v-text="link.title" target="_blank" />
            </li>
        </ul>
    </section>
</template>