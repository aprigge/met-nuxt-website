<template lang="html">
  <div class="object-detail">
    <div class="header">Object Details</div>
    <div class="meta">
      <h3 class="title" v-html="title" />
      <object-image v-if="src" :src="src" :width="200" :height="300" />
      <div class="details">
        <div class="artistDisplayName" v-html="artistDisplayName" />
        <div class="department" v-html="department" />
        <div class="medium" v-html="medium" />
        <div class="date" v-html="objectDate" />
        <div v-if="wiki" class="wiki" v-html="wiki" />
        <smart-link class="objectURL" :to="objectURL" v-html="objectURL" />
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
.object-detail {
  font-family: "Helvetica", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f8f8f8;

  border: 2px solid var(--color-secondary-grey-01);
  width: 500px;
  height: 500px;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 10px;
  padding-left: 15px;
  padding-right: 15px;

  .header {
    font-size: 28px;
    font-weight: 500;
  }

  .meta {
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
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
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

  // Hovers
  @media #{$has-hover} {
    &:hover {
      .objectURL {
        text-decoration: underline;
        text-decoration-color: var(--color-default-cyan-base);
        text-decoration-thickness: 1.5px;
      }
    }
  }
}
</style>
