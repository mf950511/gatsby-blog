import React from 'react'
import { Link } from 'gatsby'
import tagInfoStyles from './tagInfo.module.scss'
export default class TagInfo extends React.Component{
  render(){
    const category = this.props.categories
    const tags = this.props.tags
    return (
      <div className={tagInfoStyles.tagInfoWrap}>
        <div className={tagInfoStyles.tagClassify}>
          <Link to={`/category/${category}`}>{category}</Link>
        </div>
        <div className={tagInfoStyles.tagList} data-flex="main:left">
          {
            tags.map((item, index) => (
              <div key={index} className={tagInfoStyles.tag}><Link to={`/tag/${item}`}>{item}</Link></div>
            ))
          }
        </div>
      </div>
    )
  }
}