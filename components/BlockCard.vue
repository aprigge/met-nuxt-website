<template lang="html">
  <div class="block-card">
    <nuxt-link class="to" :to="to"
      ><h3 class="title" v-html="title"
    /></nuxt-link>
    <div class="meta">
      <object-image v-if="src" :src="src" :width="500" :height="500" />
      <div class="details">
        <div class="text" v-html="text" />
        <div class="date" v-html="objectDate" />
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
    text: {
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
    src: {
      type: String,
      default: "",
    },
  },

  // TODO add computed property, date for example, format
  // TODO make a util functions, things using over the apps
};
</script>

<style lang="scss" scoped>
.block-card {
  font-family: "Helvetica", "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f8f8f8;

  border: 2px solid var(--color-secondary-grey-01);
  width: 1100px;
  max-height: 1000px;
  overflow: hidden;
  box-sizing: border-box;
  margin-left: 40px;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;

  .meta {
    justify-content: center;
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
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
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;
  }
  .text {
    font-size: 16px;
    font-weight: normal;
    line-height: 150%;
    color: black;
  }

  @media #{$has-hover} {
    &:hover {
      .title {
        text-decoration: underline;
        text-decoration-color: var(--color-default-cyan-base);
        text-decoration-thickness: 1.5px;
      }
    }
  }
}
</style>
