<script setup lang="ts">
import { useToastStore } from "@/stores/toastStore.ts";

const store = useToastStore();
function newMessage() {
  store.addToast({
    message: new Date().toString(),
    status: "info",
    userMustDismiss: store.maxId % 4 === 0,
  });
}

function addMessages() {
  for (let i = 0; i < 4; i++) {
    newMessage();
  }
}
</script>

<template>
  <button @click="addMessages">Add message to store</button>
</template>

<style scoped></style>
