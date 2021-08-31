<template lang="html">
  <div class="block-card">
    <object-image
      class="image"
      v-if="src"
      :src="src"
      :width="500"
      :height="500"
    />

    <nuxt-link class="to" :to="to"
      ><h3 class="title" v-html="title"
    /></nuxt-link>
    <div class="artist" v-html="artistDisplayName" />
    <div class="medium" v-html="medium" />
    <div class="date" v-html="objectDate" />
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
    objectURL: {
      type: String,
      default: "",
    },
    artistDisplayName: {
      type: String,
      default: "",
    },
    medium: {
      type: String,
      default: "",
    },
    department: {
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
.block-card {
  font-family: var(--font-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 1100px;
  max-height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: var(--rounded-slightly-all);
  background-color: var(--color-primary-lightest-blue);
  border: 2px solid var(--color-primary-lightest-blue);

  .image {
    margin-top: 15px;
  }
  .title {
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    margin-top: 35px;
    margin-bottom: 10px;
    color: var(--color-primary-darkest-blue);
    padding-right: 60px;
    padding-left: 60px;
  }
  .artist {
    font-size: 20px;
    color: var(--color-gray-03);
    margin-bottom: 10px;
  }
  @media #{$has-hover} {
    .title:hover {
      text-decoration: underline;
      text-decoration-color: var(--color-primary-blue);
      text-decoration-thickness: 2.5px;
    }
  }
}
</style>
