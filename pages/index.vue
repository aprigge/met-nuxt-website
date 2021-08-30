<template lang="html">
  <section class="home-page">
    <primary-header />
    <masthead-secondary title="Objects from the Met Museum's Collection" />
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
    <divider-general class="divider-general" />
    <primary-footer class="footer" :items="footerPrimaryItems" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      footerPrimaryItems: [
        {
          text: "Met Museum API Documentation",
          to: "https://metmuseum.github.io/",
          target: "_blank",
        },
        {
          text: "API Endpoint",
          to:
            "https://collectionapi.metmuseum.org/public/collection/v1/objects",
          target: "_blank",
        },
        {
          text: "Met Museum Collections",
          to: "https://www.metmuseum.org/art/collection",
          target: "_blank",
        },
      ],
    };
  },
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
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .footer {
    margin-top: 15px;
  }
}
</style>
