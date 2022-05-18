require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emma-core/gatsby-config.js
    siteTitle: `Bhumika Sheth`,
    siteTitleAlt: `Bhumika Sheth - Psychologist. Thinker. Explorer. Seeker. Passionate Educator. Avid Reader. Ameateur Singer. Misfit.`,
    siteHeadline: `Bhumika Sheth - Psychologist. Thinker. Explorer. Seeker. Passionate Educator. Avid Reader. Ameateur Singer. Misfit.`,
    siteUrl: `https://bhumikasheth.com`,
    siteDescription: `Bhumika Sheth - Psychologist. Thinker. Explorer. Seeker. Passionate Educator. Avid Reader. Ameateur Singer. Misfit.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@beingbhuminist`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emma`,
      // See the theme's README for all available options
      options: {},
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bhumika Sheth - Psychologist. Thinker. Explorer. Seeker. Passionate Educator. Avid Reader. Ameateur Singer. Misfit.`,
        short_name: `Bhumika Sheth`,
        description: `Bhumika Sheth - Psychologist. Thinker. Explorer. Seeker. Passionate Educator. Avid Reader. Ameateur Singer. Misfit.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b83280`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
