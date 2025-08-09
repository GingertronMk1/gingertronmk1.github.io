<script setup>
const { data } = await useAsyncData("cv", () =>
  queryContent("/").where({ title: "CV" }).findOne(),
);
</script>
<template>
  <ContentRenderer :value="data">
    <template #empty>
      <p>No content found.</p>
    </template>
  </ContentRenderer>
</template>
