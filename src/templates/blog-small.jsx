import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout/layout'
import ListWrapper from 'components/listWrapper/listWrapper'

export default ({data})=>(
  <Layout>
    <ListWrapper>
      <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}></div>
    </ListWrapper>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}){
      html
      frontmatter{
        title
        date(formatString: "")
      }
    }
  }
`