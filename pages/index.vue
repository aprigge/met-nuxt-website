<template lang="html">
  <section class="home-page">
    <primary-header />
    <title-block
      title="Ashton Museum Object App"
      text="Explanation about what this projec is"
    />
    <!-- TODO here make a component to pass in computed properties about this object -->
    <about-this title="Ashton Museum Object App" :text="objectHighlight" />
    <img :src="parsedImage" :width="156" :height="192" />
    <block-card
      v-for="(highlight, index) in objectHighlight"
      v-if="highlight"
      :key="index"
      :title="index"
      :text="highlight"
      to="metmmuseum.org"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      objectHighlight: {},
      metPortraits: {}
    };
  },
  async fetch() {
    const objectHighlight = await this.$axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/324290"
    );
    this.objectHighlight = objectHighlight;

    const metPortraits = await this.$axios.$get(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=portrait"
    );
    this.metPortraits = metPortraits;
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
