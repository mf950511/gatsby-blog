import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import BlogList from 'components/blogList/blogList'
import Paganation from 'components/paganation/paganation'
export default class Index extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      edges: props.data.allMarkdownRemark.edges,
      count: props.data.allMarkdownRemark.totalCount,
      limit: props.pageContext.limit,
      currentIndex: props.pageContext.currentIndex
    }
  }
  componentDidMount(){
  }
  render (){
    const totalCount = this.state.count
    const edges = this.state.edges
    const currentIndex = this.state.currentIndex
    const limit = this.state.limit
    console.log(totalCount, currentIndex, limit)
    return (
      <Layout>
        <div>
          <BlogList edges={edges}></BlogList>
          <Paganation limit={limit} count={totalCount} currentIndex={currentIndex} baseUrl="/blog/"></Paganation>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($skip: Int!, $limit:Int!) {
    allMarkdownRemark(
      limit: $limit
      filter: {
        frontmatter: {date: {ne: null}}
      }
      skip: $skip
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
