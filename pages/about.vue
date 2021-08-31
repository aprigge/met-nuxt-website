<template lang="html">
  <section class="about-page">
    <masthead-secondary title="About this Project" />
    <div class="text-blocks">
      <text-block
        title="What"
        text="I built this project because wanted to highlight skills I haven’t nececarilly applied to other work projects.
            "
      />
      <text-block
        title="Why"
        text="I have an Art History degree and have always been interested in Humanities data. I was looking for interesting data sources and found the Met Museum had published a REST API."
      />
      <text-block title="How" text="Nuxt App" />
      <text-block
        title="Next Steps"
        text="So many features I would love to build! Including a search wrapper for the API, adding cypress tests, and optimizing the API queries."
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-page {
  .text-blocks {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
  }
}
</style>
