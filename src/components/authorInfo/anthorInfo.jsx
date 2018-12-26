import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import cat from './cat.jpg'
import authorInfo from './authorInfo.module.scss'
export default () => (
  <StaticQuery
  query={
    graphql`
      query{
        site {
          siteMetadata {
            author
            authorDesc
          }
        }
      }
    `
  }
  render={data => (
    <header className={authorInfo.authorInfo} data-flex="dir:top cross:center">
      <Link to="/">
        <div className={authorInfo.imgWrapper}>
          <img src={cat} alt=""/>
        </div>
      </Link>
      <hgroup data-flex="dir:top cross:center">
        <h2 className={authorInfo.authorName}>
          <Link to="/">{data.site.siteMetadata.author}</Link>
        </h2>
        <p>{data.site.siteMetadata.authorDesc}</p>
      </hgroup>
    </header>
  )}
  />
)