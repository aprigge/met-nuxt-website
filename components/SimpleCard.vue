<template lang="html">
  <div class="simple-card">
    <nuxt-link class="to" :to="to"
      ><h3 class="title" v-html="title"
    /></nuxt-link>
    <div class="artistDisplayName" v-html="artistDisplayName" />
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

    to: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.simple-card {
  font-family: var(--font-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 300px;
  max-height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  margin: 15px 15px 15px 15px;
  background-color: var(--color-about-purple-lightest);
  border-radius: var(--rounded-slightly-all);

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

  @media #{$has-hover} {
    .title:hover {
      text-decoration: underline;
      text-decoration-color: var(--color-default-cyan-lightest);
      text-decoration-thickness: 2.5px;
    }
  }
}
</style>
