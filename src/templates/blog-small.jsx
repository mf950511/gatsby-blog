import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from 'components/layout/layout'
import ListWrapper from 'components/listWrapper/listWrapper'
import TagInfo from 'components/tagList/tagInfo'

import 'highlight.js/styles/atom-one-dark.css';
// 代码格式化
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
//  atelier-dune-dark  atom-one-dark xt256

export default class Blog extends React.Component{
  componentDidMount(){
    document.querySelectorAll('pre code').forEach((block) => {
      console.log(block)
      hljs.highlightBlock(block);
    });
    
    
  }
  render(){
    const { data } = this.props
    return (
      <Layout>
        <ListWrapper flag={true} >
          <Link to={`/blog${data.markdownRemark.fields.slug}`}><h1 className="article-title">{data.markdownRemark.frontmatter.title}</h1></Link>
          <TagInfo categories={data.markdownRemark.frontmatter.categories} tags={data.markdownRemark.frontmatter.tags}></TagInfo>
          <div className="article-entry" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        </ListWrapper>
      </Layout>
    )
  }
}

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