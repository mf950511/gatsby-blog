import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from 'components/layout/layout'
import ListWrapper from 'components/listWrapper/listWrapper'
import TagInfo from 'components/tagList/tagInfo'

export default ({data})=>(
  <Layout>
    <ListWrapper flag={true} >
      <Link to={`/blog${data.markdownRemark.fields.slug}`}><h1 className="article-title">{data.markdownRemark.frontmatter.title}</h1></Link>
      <TagInfo categories={data.markdownRemark.frontmatter.categories} tags={data.markdownRemark.frontmatter.tags}></TagInfo>
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
        tags
        categories
      }
      fields{
        slug
      }
    }
  }
`