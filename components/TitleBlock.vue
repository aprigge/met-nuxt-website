<template lang="html">
  <div class="title-block">
    <div class="title" v-html="title"></div>
    <div class="text" v-html="text"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.title-block {
  margin-top: 75px;
  margin-left: 80px;
  margin-right: 80px;
  text-align: left;

  .title {
    font-size: 36px;
    font-weight: 500;
    font-family: var(--font-primary);
  }
  .text {
    font-family: var(--font-primary);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;

    line-height: 32px;
  }
}
</style>
