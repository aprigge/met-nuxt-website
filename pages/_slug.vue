<template lang="html">
  <section class="detail-page">
    <masthead-secondary title="Object Details" />
    <div class="meta">
      <div class="images-details">
        <object-image :src="parsedImage" width="400" height="400" />
        <object-image
          v-if="objectHighlight.additionalImages[0]"
          :src="objectHighlight.additionalImages[0]"
          width="400"
          height="400"
        />
        <object-detail
          :wiki="objectHighlight.artistWikidata_URL"
          :department="objectHighlight.department"
          :title="objectHighlight.title"
          :objectURL="objectHighlight.objectURL"
          :artistDisplayName="objectHighlight.artistDisplayName"
          :medium="objectHighlight.medium"
        />
      </div>
      <divider-general class="divider-general" />
      <json-detail
        title="This is the JSON response for this object from the Met's API"
        :response="objectHighlight"
      />
    </div>
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
    parsedImage() {
      return this.objectHighlight["primaryImage"];
    },
    parsedDate() {
      let date = this.objectHighlight["objectDate"];
      //do some formatting
      return date;
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-page {
  .meta {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .images-details {
    padding: 20px 20px 20px 20px;
    margin-left: var(--unit-gutter);
    margin-right: var(--unit-gutter);
    display: flex;
    flex-direction: row;
  }

  .divider-general {
    width: 100%;
  }

  .footer {
    margin-top: 15px;
  }
}
</style>
