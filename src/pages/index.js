import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
// import BolgNav from '../components/blogNav/blogNav'
import BlogList from 'components/blogList/blogList'
export default class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      edges: props.data.allMarkdownRemark.edges,
      count: props.data.allMarkdownRemark.totalCount
    }
  }
  componentDidMount(){
    this.initList(0)
  }
  // 监听页面初始化数据与滚动事件数据
  initList(top){
    let windowHeight = window.innerHeight
    let animate = document.querySelectorAll('.blogList')
    let scrollLine = top + windowHeight - 100
    let edges = this.state.edges.map((item, index) => {
      let pos = animate[index].getBoundingClientRect().top
      if(pos <= scrollLine) {
        item.flag = true
      }
      return item
    })
    this.setState({
      edges
    })
    
  }
  render (){
    const totalCount = this.state.count
    const edges = this.state.edges
    return (
      <Layout handleScroll={this.handleScroll.bind(this)}>
        <div>
          <BlogList edges={edges}></BlogList>
        </div>
      </Layout>
    )
  }
  handleScroll(event){
    const ele = event.target
    this.initList(ele.scrollTop)
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 4
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
