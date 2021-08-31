<template lang="html">
  <main class="layout-default">
    <primary-header />

    <nuxt class="page" />

    <primary-footer class="footer" :items="footerPrimaryItems" />
  </main>
</template>

<script>
// Mock data

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
};
</script>

<style lang="scss" scoped>
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  > * {
    width: 100%;
    box-sizing: border-box;
  }
  .page {
    flex: 1 1 auto;
  }

  .footer {
    margin-top: 15px;
  }
}
</style>
