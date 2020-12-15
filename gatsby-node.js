//Goal 1: generate slugs for each post
//Goal 2: generate blog post page template
// Goal 3: generate new page for each post
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // const fileNode = getNode(node.parent)
    //console.log(createFilePath({ node, getNode, basePath: `pages` }))
    //console.log(`\n`, fileNode.relativePath)
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //get path to template
  //get markdown data
  //create new pages
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
