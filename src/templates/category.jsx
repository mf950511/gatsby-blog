import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/layout/layout'
import TagList from 'components/tagList/tagList'
export default class Tag extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tagList: {}
    }
  }
  
  componentDidMount(){
    const edges = this.props.data.allMarkdownRemark.edges
    const obj = {}
    edges.forEach(item => {
      item = item.node
      let date = item.frontmatter.date.split(':')
      
      console.log(date)
      let year = date[0]
      let tag = {}
      tag.title = item.frontmatter.title
      tag.time = date[1]
      tag.tags = item.frontmatter.tags
      tag.categories = item.frontmatter.categories
      tag.slug = item.fields.slug
      if(obj[year]) {
        obj[year].push(tag)
      } else {
        obj[year] = []
        obj[year].push(tag)
      }
    })
    this.setState({
      tagList: obj
    })
  }
  render(){
    return (
      <Layout handleScroll={this.handleScroll.bind(this)}>
        <TagList tagList={this.state.tagList}></TagList>
      </Layout>
    )
  }
  handleScroll(){}
}

export const query = graphql`
  query($categories: String) {
    allMarkdownRemark(
      limit: 10,
      filter: {
        frontmatter: {categories: {eq: $categories}}
      }
      sort: {fields: [frontmatter___date],order: DESC}
    ){
      edges{
        node{
          fields{
            slug
          }
          frontmatter{
            date(formatString:"YYYY:MM-DD")
            tags
            categories
            title
          }
        }
      }
    }
  }
`