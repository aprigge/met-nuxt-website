<template lang="html">
  <div class="site-brand-bar">
    <nuxt-link class="title" to="/">
      An Exploration of the Met Museum's Collection API
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.site-brand-bar {
  height: 100px;
  background-color: #e4002b;
  width: 100%;
  /* padding: 0 var(--unit-gutter); */

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: flex-start;

  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 36px;
  color: var(--color-white);

  .title {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
