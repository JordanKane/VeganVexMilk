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
  ],
}
