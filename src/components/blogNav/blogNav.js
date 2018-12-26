import React from 'react'
import {StaticQuery, graphql, Link} from 'gatsby'

export default () => (
  <StaticQuery 
  query={
    graphql`
      query {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                name
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  }
  render={data => (
    <ul>
      {data.allMarkdownRemark.edges.map(({node}, index) => {
        return <li key={index}><Link to={node.fields.slug}>{node.frontmatter.title}</Link></li>
      })}
    </ul>
  )}
  />
)