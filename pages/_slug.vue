<template lang="html">
  <section class="home-page">
    <primary-header />
    <about-this text="Here is a more detailed look at this object" />
    <object-image :src="parsedImage" width="500" height="500" />
    <object-detail />
  </section>
</template>

<script>
export default {
  data() {
    return {
      objectHighlight: {}
    };
  },
  async fetch() {
    const objectHighlight = await this.$axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/324290"
    );
    this.objectHighlight = objectHighlight;
    // take five of these and do object api queries on them
  },
  computed: {
    // TODO need to massage data
    parsedObjectData() {
      return objectHighlight;
    },
    parsedImage() {
      return this.objectHighlight["primaryImage"];
      //compute if there is a primary image, add text and a link>
    },
    parsedDate() {
      let date = this.objectHighlight["objectDate"];
      //do some formatting
      return date;
    },
    parsedWikidataUrl() {
      return this.objectHighlight["Wikidata_URL"];
    }
  }
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
