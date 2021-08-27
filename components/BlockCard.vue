<template lang="html">
  <div class="block-card-vertical">
    <div class="meta">
      <h3 class="title" v-html="title" />
      <div class="text" v-html="text" />
    </div>
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
    },
    to: {
      type: String,
      default: ""
    }
  }

  // TODO add computed property, date for example, format
  // TODO make a util functions, things using over the apps
};
</script>

<style scoped>
.block-card-vertical {
  background-color: pink;

  font-family: "Helvetica", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  border: 2px solid blue;
  width: 300px;
  height: 400px;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 40px;
  margin-top: 10px;

  transition-property: box-shadow, transform;
  transition-duration: 400ms;
  transition-timing-function: ease-in-out;

  .meta {
    transition: background-color 400ms ease-in-out;
    background-color: white;
    flex: 1 1 auto;
  }
  .title {
    font-size: 24px;
    line-height: 110%;
    text-align: center;
    letter-spacing: 0.01em;
    font-weight: 500;
    margin-top: 35px;
    margin-bottom: 10px;
    color: black;
    padding-right: 60px;
    padding-left: 60px;
  }
  .text {
    font-size: 16px;
    font-weight: normal;
    line-height: 150%;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
    color: black;
  }
}
</style>
