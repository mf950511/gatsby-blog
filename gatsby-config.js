module.exports = {
  siteMetadata: {
    title: '孟帆的博客',
    author: 'Francis',
    authorDesc: '前端小白，光吃不做'
  },
  pathPrefix: `/blog`,
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
}