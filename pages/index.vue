<template lang="html">
  <section class="home-page">
    <primary-header />
    <title-block
      title="Ashton Museum Object App"
      text="Explanation about what this project is"
    />
    <div class="block-cards">
      <block-card
        :title="objectHighlight.title"
        :text="objectHighlight.objectName"
        :objectDate="objectHighlight.objectDate"
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
      <block-card
        v-for="(object, index) in searchResultsList"
        :key="index"
        text="Another object id"
        :title="object"
        :to="`/${object}`"
      />
    </div>
    <primary-footer items="[{"Met Museum": "metmuseum.org"}]" />
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
      //compute if there is a primary image, add text and a link>
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
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  .block-cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
}
</style>
