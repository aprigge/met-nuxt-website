<template lang="html">
  <div class="json-detail">
    <h3 class="title" v-html="title" />
    <pre class="response" v-html="response"></pre>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    response: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.json-detail {
  font-family: "Helvetica", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f8f8f8;
  border-radius: var(--rounded-slightly-all);

  border: 2px solid var(--color-secondary-grey-01);
  max-width: 1100px;
  max-height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 40px;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;

  .title {
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    margin-top: 35px;
    margin-bottom: 10px;
    color: black;
    padding-right: 60px;
    padding-left: 60px;
  }
  .response {
    padding: 10px 10px 10px 10px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: normal;

    color: black;
  }
}
</style>
