import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
// import BolgNav from '../components/blogNav/blogNav'
import ListWrapper from 'components/listWrapper/listWrapper'
export default class Index extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      edges: props.data.allMarkdownRemark.edges,
      count: props.data.allMarkdownRemark.totalCount,
      index: 0
    }
  }
  componentDidMount(){
    console.log(document.getElementById('navTop').getBoundingClientRect())
    const edges = this.state.edges.map((item, index) => {
      if(index !== 0) {
        item.flag = false
      }
      return item
    })
    this.setState({
      edges,
      index: 1
    })
    setTimeout(()=>{
      this.initList(0)
    }, 20)
  }
  // 监听页面初始化数据与滚动事件数据
  initList(top){
    let windowHeight = window.innerHeight
    let mobileNavHeight = document.getElementById('navTop').getBoundingClientRect().height
    let listHeight = this.refs.listWrapper.getBoundingClientRect().height
    let animateIndex = this.state.index
    let scrollLine = top + windowHeight
    if(listHeight + mobileNavHeight <= windowHeight) {
      scrollLine = windowHeight
    } else {
      scrollLine = top + windowHeight
    }
    if(mobileNavHeight+listHeight <= scrollLine) {
      let edges = this.state.edges.map((item, index) => {
        if(index === animateIndex) {
          item.flag = true
        } else if(index > animateIndex) {
          item.flag = false
        }
        return item
      })
      this.setState({
        edges,
        index: (this.state.index+1)
      })
    }
    if(listHeight <= windowHeight - mobileNavHeight) {
      this.initList(0)
    }
    
  }
  render (){
    const totalCount = this.state.count
    const edges = this.state.edges
    return (
      <Layout handleScroll={this.handleScroll.bind(this)}>
        <div ref="listWrapper">
          {
            edges.map(({node, flag}, index)=>(
              <ListWrapper key={index} flag={flag}>
                <Link to={node.fields.slug}><h1 className="article-title">{node.frontmatter.title}</h1></Link>
                <div className="article-entry" dangerouslySetInnerHTML={{__html: node.html}}></div>
              </ListWrapper>
            ))
          }
        </div>
        
      </Layout>
    )
  }
  handleScroll(event){
    const ele = event.target
    this.initList(ele.scrollTop)
    // console.log(this.refs.listWrapper.getBoundingClientRect())
    // console.log(ele.scrollTop)
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
          }
        }
      }
    }
  }
`
