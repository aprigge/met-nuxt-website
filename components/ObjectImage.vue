<template lang="html">
  <div class="image">
    <img :src="src" :width="width" :height="height" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    alt: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  -webkit-user-select: none;
  margin: auto;
  cursor: zoom-in;
  transition: background-color 300ms;
}
</style>
