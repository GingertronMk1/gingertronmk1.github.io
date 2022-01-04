<template>
  <div class="button-checkbox">
    <input
      :id="identifier"
      type="checkbox"
      :name="identifier"
      :checked="value"
      @input="handleInput"
    />
    <label :for="identifier" v-text="label" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    identifier: {
      type: String,
      default: () => Math.random().toString(36).substring(7),
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.checked);
    },
  },
};
</script>

<style lang="scss">
.button-checkbox {
  @include flex(row, center, stretch);
  position: relative;

  input {
    display: none;

    & + label {
      @include flex(column, center, stretch);
      padding: 0.5em 1em;
      background-color: $white;
      color: $primary;
      border: 2px solid $primary;
      border-radius: 0.5rem;
      cursor: pointer;
      text-align: center;
    }

    &:checked + label {
      background: $standard-background;
      color: $white;
    }
  }
}
</style>
