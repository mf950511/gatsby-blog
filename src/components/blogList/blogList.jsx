import React from 'react'
import { Link } from 'gatsby'
import ListWrapper from 'components/listWrapper/listWrapper'
export default ({edges})=> (
  <div>
    {
      edges.map(({node, flag}, index)=>(
        <ListWrapper key={index} flag={flag}>
          <Link to={node.fields.slug}><h1 className="article-title">{node.frontmatter.title}</h1></Link>
          <div className="article-entry" dangerouslySetInnerHTML={{__html: node.html.split('<!--more-->')[0]}}></div>
        </ListWrapper>
      ))
    }
  </div>
)