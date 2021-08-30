<template lang="html">
  <div class="site-brand-bar">
    <nuxt-link class="home" to="/"> Met Museum's Collection API </nuxt-link>
    <nuxt-link class="about" to="/about"> About </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.site-brand-bar {
  --unit-height: 80px;
  padding: 0 var(--unit-gutter);
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: space-between;
  align-items: flex-start;

  height: 100px;
  background-color: var(--color-primary-blue);
  width: 100%;
  /* padding: 0 var(--unit-gutter); */

  font-family: var(--font-primary);
  font-size: 36px;
  color: var(--color-white);

  .home,
  .about {
    height: var(--unit-height);
    position: relative;
    z-index: 10;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  @media #{$has-hover} {
    .home:hover {
      text-decoration: underline;
      text-decoration-color: var(--color-default-cyan-lightest);
      text-decoration-thickness: 3px;
    }
    .about:hover {
      text-decoration: underline;
      text-decoration-color: var(--color-default-cyan-lightest);
      text-decoration-thickness: 3px;
    }
  }
}
</style>
