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
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.title-block {
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 20px;
}
</style>
