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
    // {
    //   resolve: "gatsby-source-twitch",
    //   options: {
    //     userID: "<<Twitch UserID eg. 6058227 >>",
    //     clientID: "<< Add your Twitch client_id here>>",
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-paypal",
    //   options: {
    //     clientId: "YOUR_CLIENT_ID",
    //     currency: "EUR", // Optional
    //     vault: true, // Optional
    //   },
    // },
    "gatsby-plugin-postcss",
  ],
}
