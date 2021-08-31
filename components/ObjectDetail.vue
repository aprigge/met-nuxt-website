<template lang="html">
  <div class="object-detail">
    <h3 class="title" v-html="title" />
    <div class="details">
      <div class="artist" v-html="artistDisplayName" />
      <div class="medium" v-html="medium" />
      <div class="date" v-html="objectDate" />
      <div class="department" v-html="department" />
      <div class="urls">
        <smart-link class="objectURL" :to="objectURL" v-html="objectURL" />
        <smart-link class="objectURL" :to="wiki" v-html="wiki" />
      </div>
    </div>
  </div>
</template>

<script>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  font-family: var(--font-primary);
  background-color: var(--color-primary-lightest-blue);
  border: 2px solid var(--color-primary-lightest-blue);
  width: 500px;
  height: 500px;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 10px;
  padding-left: 15px;
  padding-right: 15px;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

    padding-left: 15px;
    padding-right: 15px;
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
  .department,
  .medium {
    font-size: 14px;
    color: var(--color-grey-02);
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 600;
  }
  .urls {
    margin-top: 50px;
    font-size: 14px;
    color: var(--color-grey-01);

    display: flex;
    flex-direction: column;
  }

  // Hovers
  @media #{$has-hover} {
    .objectURL:hover {
      text-decoration: underline;
      text-decoration-color: black;
      text-decoration-thickness: 1.5px;
    }
  }
}
</style>
