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
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  -webkit-user-select: none;
  margin: auto;
}
</style>
