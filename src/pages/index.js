import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BolgNav from '../components/blog-nav'
export default ( {data} ) => (
  <Layout>
    <h2>{data.site.siteMetadata.title}</h2>
    <BolgNav></BolgNav>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
