<template>
  <div class="fiftyfifty">
    <div
      v-for="(line, index) in lines"
      :key="`line-${index}`"
      class="fiftyfifty__row"
    >
      <div
        class="fiftyfifty__image"
        :style="{ 'background-image': `url(${line.image})` }"
      />

      <div class="fiftyfifty__text">
        <div class="fiftyfifty__text-inner" v-text="line.text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lines: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.fiftyfifty {
  @include flex(column);
  width: 100%;

  &__row {
    @include flex(row, space-between);
    height: 30rem;

    &:nth-of-type(2n) {
      flex-direction: row-reverse;
      text-align: right;
    }

    @include MQ($medium) {
      flex-direction: column;
      height: auto;

      &:nth-of-type(2n) {
        text-align: center;
        flex-direction: column;
      }
    }
  }

  &__image,
  &__text {
    max-width: 50%;
    flex: 1;

    @include MQ($medium) {
      max-width: 100%;
    }
  }

  &__image {
    background-position: top center;
    background-size: cover;

    @include MQ($medium) {
      min-height: 30rem;
    }
  }

  &__text {
    @include flex(row, $align: center);
    align-items: center;
    text-align: inherit;

    &-inner {
      padding: 1rem;
      font-size: 1.5rem;
      text-align: inherit;
    }
  }
}
</style>
