import React from 'react'
import { Link } from 'gatsby'
import TagInfo from 'components/tagList/tagInfo'
export default ({tagList})=> (
  <div>
    {
      Object.keys(tagList).map(key => {
        let node = tagList[key]
        let year = key
        return (
          <section className="archives-wrap" key={key}>
            <div className="archive-year-wrap">
              {year}
            </div>
            <div className="archives">
            {
              node.map((item, index) => (
                  <article className="archive-article" key={index}>
                    <header className="archive-article-header">
                      <div className="archive-title-wrap" data-flex="main:justify box:last">
                        <div className="archive-title">
                          <Link to={`/blog${item.slug}`}>{item.title}</Link>
                        </div>
                        <time>{item.time}</time>
                      </div>
                      <div className="tagInfoWrapper">
                        <TagInfo categories={item.categories} tags={item.tags}></TagInfo>
                      </div>
                    </header>
                  </article>
              ))
            }
            </div>
          </section>
        )
      })
    }
  </div>
)