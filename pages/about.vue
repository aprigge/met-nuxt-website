<template lang="html">
  <section class="about-page">
    <masthead-secondary title="About this Project" />
    <div class="text-blocks">
      <text-block
        title="What"
        text="This project is a Nuxt App that queries and presents collection data from the Met Museum's Collections API. The Nuxt app creates a page for each object ID in the url and presents the image, some metadata, and the entire JSON response. More features coming soon!"
      />
      <text-block
        title="Why"
        text="I have an Art History degree and have always been interested in Humanities data. I was looking for interesting data sources and found the Met Museum had published a REST API. I built this Nuxt app because I wanted to highlight skills I haven’t applied to other work projects."
      />
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
