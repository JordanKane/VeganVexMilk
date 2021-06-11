// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: "gatsby-source-stripe",
    //   options: {
    //     objects: ["Price"],
    //     secretKey: process.env.STRIPE_SECRET_KEY,
    //     downloadFiles: false,
    //   },
    // },
    "gatsby-plugin-postcss",
  ],
}
