import React from 'react'
import { Link } from 'gatsby'
import ListWrapper from 'components/listWrapper/listWrapper'
import TagInfo from 'components/tagList/tagInfo'
export default ({edges})=> (
  <div>
    {
      edges.map(({node, flag}, index)=>(
        <ListWrapper key={index} flag={flag}>
          <Link to={`/blog${node.fields.slug}`}><h1 className="article-title left">{node.frontmatter.title}</h1></Link>
          <div className="article-entry" dangerouslySetInnerHTML={{__html: node.html.split('<!--more-->')[0]}}></div>
          <div className="article-entry-bottom" data-flex="box:last">
            <TagInfo categories={node.frontmatter.categories} tags={node.frontmatter.tags}></TagInfo>
            <div className="article-more-link">
              <Link to={`/blog${node.fields.slug}`}>阅读全文 >></Link>
            </div>
          </div>
          
        </ListWrapper>
      ))
    }
  </div>
)