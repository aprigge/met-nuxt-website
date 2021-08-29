<template lang="html">
  <section class="detail-page">
    <primary-header />
    <about-this text="Here is a more detailed look at this object" />
    <object-image :src="parsedImage" width="500" height="500" />
    <!-- TODO v-if additionalimages, object-image componenet -->
    <object-image
      v-if="objectHighlight.additionalImages[0]"
      :src="objectHighlight.additionalImages[0]"
      width="500"
      height="500"
    />
    <object-detail
      :wiki="objectHighlight.artistWikidata_URL"
      :department="objectHighlight.department"
      :title="objectHighlight.title"
      :objectURL="objectHighlight.objectURL"
      :artistDisplayName="objectHighlight.artistDisplayName"
    />
    <block-card :text="objectHighlight" />
  </section>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const objectHighlight = await $axios.$get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${params.slug}`
    );
    return { objectHighlight };
  },

  computed: {
    // TODO need to massage data
    parsedObjectData() {
      return objectHighlight;
    },
    parsedImage() {
      return this.objectHighlight["primaryImage"];
    },
    parsedDate() {
      let date = this.objectHighlight["objectDate"];
      //do some formatting
      return date;
    },
    parsedWikidataUrl() {
      return this.objectHighlight["Wikidata_URL"];
    },
  },
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
