require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `dpscblyy`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
    // "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-stripe",
    //   options: {
    //     objects: ["Price"],
    //     secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
    //     downloadFiles: false,
    //   },
    // },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VeganVexMilk`,
        short_name: `VeganVexMilk`,
        description: `The best raid team you're ever going to find.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/bungieFireteams.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
