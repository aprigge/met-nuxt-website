<template lang="html">
  <div class="object-detail">
    <div class="meta">
      <nuxt-link class="to" :to="to"
        ><h3 class="title" v-html="title"
      /></nuxt-link>
      <object-image v-if="src" :src="src" :width="200" :height="300" />
      <div class="details">
        <div class="department" v-html="department" />
        <div class="date" v-html="objectDate" />
        <div class="wiki" v-html="wiki" />
      </div>
    </div>
  </div>
</template>

<script>
//JUst have it take the object from the api?
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    departmenst: {
      type: String,
      default: "",
    },
    objectDate: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "",
    },
    wiki: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.object-detail {
  font-family: "Helvetica", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  border: 2px solid var(--color-secondary-grey-01);
  max-width: 1100px;
  max-height: 600px;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 40px;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;

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
  .details {
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
