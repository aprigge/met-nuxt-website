<template lang="html">
  <div class="about-this">
    <div class="about-this" v-html="title"></div>
    <div class="text" v-html="text"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.about-this {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 20px;
}
</style>
