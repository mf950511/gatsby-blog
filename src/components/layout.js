import React from 'react'
import { StaticQuery } from 'gatsby'
import layoutStyles from './layout.module.scss'
export default ({children}) => (
  <StaticQuery 
  query={
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  }
  render={data => (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.red}>
        {children}
        <div className={layoutStyles.green}>{data.site.siteMetadata.author}</div>
      </div>
    </div>
  )}
  />
  
)