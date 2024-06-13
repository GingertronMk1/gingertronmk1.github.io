<script setup lang="ts">
const links = ref([
    // {
    //     link: "/cv",
    //     text: "CV",
    // },
    {
        link: "/counter",
        text: "Counter"
    }
]);
</script>
<template>
    <nav class="site-nav">
        <div class="site-nav__inner">
            <NuxtLink to="/"><h1 class="site-nav__header-text">Jack Ellis</h1></NuxtLink>
        <div class="site-nav__nav-links">
            <NuxtLink
                class="site-nav__nav-link"
                v-for="link in links"
                :key="JSON.stringify(link)"
                :to="link.link"
                >{{ link.text }}</NuxtLink>
        </div>
        </div>
    </nav>
</template>