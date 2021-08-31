<template lang="html">
  <section class="home-page">
    <masthead-secondary title="Objects from the Met Museum's Collection" />
    <div class="block-cards">
      <block-card
        :title="objectHighlight.title"
        :artistDisplayName="objectHighlight.artistDisplayName"
        :objectDate="objectHighlight.objectDate"
        :to="parsedTo"
        :src="parsedImage"
      />
      <block-card
        :title="secondObjectHighlight.title"
        :artistDisplayName="secondObjectHighlight.artistDisplayName"
        :objectDate="secondObjectHighlight.objectDate"
        :to="parsedSecondTo"
        :src="secondObjectHighlight.primaryImage"
      />
      <block-card
        :title="thirdObjectHighlight.title"
        :artistDisplayName="thirdObjectHighlight.artistDisplayName"
        :objectDate="thirdObjectHighlight.objectDate"
        :to="parsedThirdTo"
        :src="thirdObjectHighlight.primaryImage"
      />
      <divider-general class="divider-general" />
      <json-detail
        title="Because of the Structure of the API, search queries only return a list of ids"
        :response="searchResultsList"
      />
      <div class="simple-cards">
        <simple-card
          v-for="(object, index) in searchResultsList"
          :key="index"
          text="Met Museum Object ID"
          :title="object"
          :to="`/${object}`"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const objectHighlight = await $axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/340070"
    );
    const secondObjectHighlight = await $axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/437397"
    );
    const thirdObjectHighlight = await $axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/247993"
    );
    const searchResults = await $axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=picasso"
    );
    return {
      objectHighlight,
      secondObjectHighlight,
      thirdObjectHighlight,
      searchResults,
    };
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
    parsedSecondTo() {
      return `/${this.secondObjectHighlight.objectID}`;
    },
    parsedThirdTo() {
      return `/${this.thirdObjectHighlight.objectID}`;
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .block-cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .simple-cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    align-items: center;

    margin-left: var(--unit-gutter);
  }
  .divider-general {
    width: 90%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
