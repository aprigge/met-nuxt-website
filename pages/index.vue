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
      <block-card title="Here is the raw data" :text="objectHighlight" />
      <block-card
        :title="secondObjectHighlight.title"
        :text="secondObjectHighlight.objectName"
        :objectDate="secondObjectHighlight.objectDate"
        :to="parsedSecondTo"
        :src="secondObjectHighlight.primaryImage"
      />
      <block-card
        title="Second group of raw data"
        :text="secondObjectHighlight"
      />
    </div>
    <primary-footer />
  </section>
</template>

<script>
export default {
  data() {
    return {
      objectHighlight: {},
      secondObjectHighlight: {}
    };
  },
  async fetch() {
    const objectHighlight = await this.$axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/324290"
    );
    this.objectHighlight = objectHighlight;

    const secondObjectHighlight = await this.$axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/334245"
    );
    this.secondObjectHighlight = secondObjectHighlight;

    // take five of these and do object api queries on them
  },
  computed: {
    isHighlight() {
      return this.objectHighlight["isHighlight"];
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
    parsedTo() {
      return `/${this.objectHighlight.objectID}`;
    },
    parsedSecondTo() {
      return `/${this.secondObjectHighlight.objectID}`;
    }
  }
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
