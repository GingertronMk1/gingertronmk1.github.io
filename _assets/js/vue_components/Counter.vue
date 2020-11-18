<template>
  <div class="p-y-2">
    <div
      :class="button_classes"
      v-on:click="count++"
    >
      +
    </div>
    <input
      type="number"
      name="counter"
      v-model="count"
      class="m-y-3 font-size-5"
    />
    <div
      :class="button_classes"
      v-on:click="count--"
    >
      -
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      button_classes: ["button", "button--center", "p-y-1", "font-size-10"],
    };
  },
  methods: {
    keyboardCounter(e) {
      switch (e.keyCode) {
        case 75:
        case 87:
        case 38:
          this.count++;
          break;
        case 74:
        case 83:
        case 40:
          this.count--;
          break;
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", this.keyboardCounter);
  },
};
</script>
