const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const results = await graphql(`
    query MyQuery {
      allSanityRaid {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const guides = results.data.allSanityRaid.edges.map(({ node }) => node)

  guides.forEach(guide => {
    actions.createPage({
      path: `/raid-guides/${guide.slug.current}`,
      component: path.resolve("./src/templates/raidGuide.js"),
      context: {
        slug: guide.slug.current,
      },
    })
  })
}
