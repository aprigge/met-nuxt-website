<template lang="html">
  <section class="about-page">
    <primary-header />
    <masthead-secondary title="About this Project" />
    <title-block
      title="Ashton Museum Object App"
      text="I built this project because wanted to highlight skills I haven’t nececarilly applied to other work projects.
            I was looking for interesting data sources and found the Met Museum had published a REST API."
    />
    <divider-general class="divider-general" />
    <primary-footer />
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.about-page {
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
