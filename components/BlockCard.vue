<template lang="html">
  <div class="block-card">
    <div class="meta">
      <object-image
        class="image"
        v-if="src"
        :src="src"
        :width="500"
        :height="500"
      />
      <div class="details">
        <nuxt-link class="to" :to="to"
          ><h3 class="title" v-html="title"
        /></nuxt-link>
        <div class="artistDisplayName" v-html="artistDisplayName" />
        <div class="department" v-html="department" />
        <div class="medium" v-html="medium" />
        <div class="date" v-html="objectDate" />
        <div v-if="wiki" class="wiki" v-html="wiki" />
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
  margin-left: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
  border-radius: var(--rounded-slightly-all);

  .meta {
    max-width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
  }
  .image {
    width: 50%;
    padding-right: 15px;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    width: 50%;
    height: 500px;
    background-color: var(--color-primary-lightest-blue);
    border: 2px solid var(--color-primary-lightest-blue);
  }
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

  .text {
    font-size: 16px;
    font-weight: normal;
    line-height: 150%;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
    color: black;
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
