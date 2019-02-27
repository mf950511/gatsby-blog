import React from "react"
import { graphql } from 'gatsby'
import Layout from 'components/layout/layout'
import BlogList from 'components/blogList/blogList'
import Paganation from 'components/paganation/paganation'
export default class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      edges: props.data.allMarkdownRemark.edges,
      count: props.data.allMarkdownRemark.totalCount
    }
  }
  componentDidMount(){
  }
  render (){
    const totalCount = this.state.count
    console.log(totalCount)
    const edges = this.state.edges
    return (
      <Layout>
        <div>
          <BlogList edges={edges}></BlogList>
          <Paganation limit={10} count={totalCount} currentIndex={0} baseUrl="/blog/"></Paganation>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {date: {ne: null}}
      }
      sort: {fields: [frontmatter___date],order:ASC}
    ){
      totalCount
      edges{
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            tags
            categories
          }
        }
      }
    }
  }
`
