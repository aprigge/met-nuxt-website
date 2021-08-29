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
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 20px;
  background-color: var(--color-secondary-grey-02);
  min-height: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;

  .title {
  }
}
</style>
