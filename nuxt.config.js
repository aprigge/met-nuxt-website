export default {
  target: "static",
  components: true,

  /*
   ** Global CSS
   */
  css: ["~/assets/styles/variables-css.scss", "~/assets/styles/global.scss"],

  /*
   ** Load SCSS into each component
   */
  styleResources: {
    scss: ["~/assets/styles/variables-scss.scss"],
  },

  // /*
  //  * Axios. Used for Libcal query.
  //  */
  axios: {
    baseURL:
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/",
  },
  buildModules: ["@nuxtjs/style-resources"],
  /*
   ** Nuxt generate configuration. Used when generating a static site.
   */
  generate: {
    fallback: "404.html",
    interval: 500,
    concurrency: 500,
  },

  /*
   ** Page transition
   */
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },

  /*
   ** Customize the progress-bar color
   ** See: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
   */
  loading: {
    color: "#0b6ab7",
    height: "3px",
  },

  /*
   ** Nuxt router configuration. Used to define settingg for the router.
   */
  router: {
    trailingSlash: false,
  },

  /*
   ** Storybook
   ** SEE https://storybook.nuxtjs.org/options
   */
  storybook: {
    stories: ["~/stories/**/*.stories.js"],
    parameters: {
      layout: "fullscreen",
      backgrounds: {
        default: "default",
        values: [
          {
            name: "White",
            value: "#ffffff",
          },
          {
            name: "Grey",
            value: "#F2F2F2",
          },
          {
            name: "Dark blue",
            value: "#032D5B",
          },
          {
            name: "Blue",
            value: "#0B6AB7",
          },
          {
            name: "Light blue",
            value: "#EAF2FB",
          },
        ],
      },
    },
    webpackFinal(config, { configDir }) {
      // Allow webpack to auto-load .gql and .svg files
      config.resolve.extensions.push(".svg", ".gql");

      return config;
    },
  },

  /*
   * Nuxt modules
   */
  modules: ["@nuxtjs/axios"],

  /*
   ** Nuxt webpack build configuration
   */
  build: {
    extend(config, ctx) {
      // Remove SVG from default Nuxt webpack rules, add back in rule without SVGs
      const svgRule = config.module.rules.find((rule) =>
        rule.test.test(".svg")
      );
      svgRule.test = /\.(png|jpe?g|gif|webp)$/i;

      // Add custom loading of SVGs as Vue components
      config.resolve.extensions.push(".svg");
      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            // ?raw on import will give raw SVG with no optimizations.
            // Good if you need unaltered SVGs for animations.
            resourceQuery: /raw/,
            use: [
              "babel-loader",
              {
                loader: "vue-svg-loader",
                options: {
                  svgo: false,
                },
              },
            ],
          },
          {
            // ?url on import will give base64 encoded SVG.
            // Good for use in CSS.
            resourceQuery: /url/,
            use: ["url-loader"],
          },
          {
            // Default SVG loader, custom SVGO options
            loader: "vue-svg-loader",
            options: {
              svgo: {
                plugins: [{ removeViewBox: false }],
              },
            },
          },
        ],
      });
    },
  },
};
