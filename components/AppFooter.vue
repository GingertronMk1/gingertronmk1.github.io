<script setup>
</script>
<template>
    <footer class="bg-black text-white mt-4 py-4 font-semibold text-lg">
        <div class="container mx-auto flex flex-row justify-between *:flex *:flex-col">
            <div>
                &copy; Jack Ellis {{ (new Date()).getFullYear() }}
            </div>
            <div>
                <NuxtLink to="/sitemap">Sitemap</NuxtLink>
            </div>
        </div>
    </footer>
</template>