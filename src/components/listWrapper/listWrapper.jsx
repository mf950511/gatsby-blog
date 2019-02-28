import React from 'react'
import listWrapperStyles from './listWrapper.module.scss'
export default class ListWrapper extends React.Component{
  componentDidMount(){
    const ScrollReveal = require('scrollreveal').default
    var slideRight = {
      distance: '150%',
      origin: 'right',
      opacity: null
    };

    ScrollReveal().reveal(this.refs.blogList, slideRight)
  }
  render(){
    const {children, title} = this.props
    return (
      
      <div key="amache" className="blogList" ref="blogList">
          <span>
            <article className={listWrapperStyles.listWrapper}>
              <div className={listWrapperStyles.listContent}>
                <div>{title}</div>
                {children}
              </div>
            </article>
          </span>
        </div>
    )
  }
}