const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
// node节点创建
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  console.log(node.internal.type)
  if(node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode, basePath: `pages`})

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}
// 页面刚创建
exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
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
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug
          }
        })
      })
      resolve()
    })
  })
}

exports.onCreateWebpackConfig = ({stage, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  })
}