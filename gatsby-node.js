const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
// node节点创建
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  console.log(node.internal.type)
  if(node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode, basePath: `pages/posts`})

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}
// 创建页面
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
              frontmatter {
                tags
                categories
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        const posts = result.data.allMarkdownRemark.edges
        const postsPerPage = 10
        const numPages = Math.ceil(posts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/index.jsx"),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
            },
          })
        })
        createPage({
          path: `blog${node.fields.slug}`,
          component: path.resolve(`./src/templates/blog-small.jsx`),
          context: {
            slug: node.fields.slug
          }
        })
        let tags = []
        tags = tags.concat(node.frontmatter.tags)
        tags.forEach(tag => {
          createPage({
            path: `tag/${tag}`,
            component: path.resolve(`./src/templates/tag.jsx`),
            context: {
              tag
            }
          })
        })
        createPage({
          path: `category/${node.frontmatter.categories}`,
          component: path.resolve(`./src/templates/category.jsx`),
          context: {
            categories: node.frontmatter.categories
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