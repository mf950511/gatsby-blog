module.exports = {
  siteMetadata: {
    title: '孟帆的博客',
    author: 'Francis'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sass`
  ]
}