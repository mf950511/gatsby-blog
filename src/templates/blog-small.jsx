import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from 'components/layout/layout'
import ListWrapper from 'components/listWrapper/listWrapper'

export default ({data})=>(
  <Layout>
    <ListWrapper flag={true} >
      <Link to={`/blog${data.markdownRemark.fields.slug}`}><h1 className="article-title">{data.markdownRemark.frontmatter.title}</h1></Link>
      <div className="article-entry" dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}></div>
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
      fields{
        slug
      }
    }
  }
`