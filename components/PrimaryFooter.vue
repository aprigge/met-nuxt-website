<template lang="html">
  <footer class="primary-footer">
    <div class="container">
      <ul class="links">
        <li v-for="item in items" :key="item.text" class="item">
          <smart-link
            class="link"
            :to="item.to"
            :target="item.target"
            v-html="item.text"
          />
        </li>
      </ul>

      <div class="met-api">
        {{ year }} Ashton Prigge Using the Met api Read more about the met api
        here link to about the api, open access, collection search
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    items: {
      // Mock: api.links
      type: Array,
      default: () => []
    }
  },
  computed: {
    year() {
      const current_year = new Date().getFullYear();
      return current_year;
    }
  }
};
</script>

<style lang="scss" scoped>
.primary-footer {
  background-color: var(--color-white);
  padding: 0 var(--unit-gutter);

  .container {
    max-width: var(--unit-content-width);
    min-height: 89px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: stretch;

    .links {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: flex-start;

      list-style-type: none;
      margin: 15px 0;
    }
    .item {
      margin-right: 48px;
    }
    .link {
      border-bottom: 2px solid var(--color-default-cyan-base);
      display: inline-block;
      line-height: 1.25;
      color: var(--color-black);
    }
    .met-api {
      color: var(--color-secondary-grey-04);
      margin: 15px 0;
    }
  }
}
</style>
