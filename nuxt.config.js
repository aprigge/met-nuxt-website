export default {
  target: "static",
  components: true,

  /*
   ** Nuxt generate configuration. Used when generating a static site.
   */
  generate: {
    fallback: "404.html",
    interval: 500,
    concurrency: 500
  },

  /*
   ** Page transition
   */
  pageTransition: {
    name: "fade",
    mode: "out-in"
  },

  //TODO load scss
  // css: [
  //   "~/assets/styles/variables-css.scss",
  //   "~/assets/styles/global.scss",
  //   "~/assets/styles/fonts.css"
  // ],

  /*
   ** Load SCSS into each component
   */
  styleResources: {
    scss: ["~/assets/styles/variables-scss.scss"]
  },

  /*
   * Nuxt modules
   */
  modules: ["@nuxtjs/axios"],

  storybook: {
    stories: ["~/stories/**/*.stories.js"],
    parameters: {
      layout: "fullscreen",
      backgrounds: {
        default: "default",
        values: [
          {
            name: "White",
            value: "#ffffff"
          },
          {
            name: "Grey",
            value: "#F2F2F2"
          },
          {
            name: "Dark blue",
            value: "#032D5B"
          },
          {
            name: "Blue",
            value: "#0B6AB7"
          },
          {
            name: "Light blue",
            value: "#EAF2FB"
          }
        ]
      }
    }
  }
};
