<template lang="html">
  <section class="home-page">
    <primary-header />
    <masthead-secondary title="An assortment of Objects" />
    <div class="block-cards">
      <block-card
        :title="objectHighlight.title"
        :text="objectHighlight.objectName"
        :objectDate="objectHighlight.objectDate"
        :department="objectHighlight.department"
        :medium="objectHighlight.medium"
        :to="parsedTo"
        :src="parsedImage"
      />
      <block-card
        :title="secondObjectHighlight.title"
        :text="secondObjectHighlight.objectName"
        :objectDate="secondObjectHighlight.objectDate"
        :to="parsedSecondTo"
        :src="secondObjectHighlight.primaryImage"
      />
      <divider-general />
      <json-detail
        title="Because of the Structure of the API, search queries only return a list of ids"
        :response="searchResultsList"
      />
      <block-card
        v-for="(object, index) in searchResultsList"
        :key="index"
        text="Met Museum Object ID"
        :title="object"
        :to="`/${object}`"
      />
    </div>
    <divider-general class="divider-general" />
    <primary-footer />
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const objectHighlight = await $axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/324290"
    );
    const secondObjectHighlight = await $axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/334245"
    );
    const searchResults = await $axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=picasso"
    );
    return { objectHighlight, secondObjectHighlight, searchResults };
  },

  computed: {
    isHighlight() {
      return this.objectHighlight["isHighlight"];
    },
    parsedImage() {
      return this.objectHighlight["primaryImage"];
    },
    parsedTo() {
      return `/${this.objectHighlight.objectID}`;
    },
    parsedSecondTo(objectID) {
      return `/${this.secondObjectHighlight.objectID}`;
    },
    searchResultsList() {
      return this.searchResults.objectIDs.slice(0, 10);
    },
    parsedObjectTo(object) {
      return `/${this.object}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  max-width: 100%;
  .block-cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .divider-general {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
