import React from 'react'
import "animate.css"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import listWrapperStyles from './listWrapper.module.scss'
export default ({children, title, flag}) => {
  if(flag === false) {
    return null
  }
  return (
    <ReactCSSTransitionGroup
      transitionEnter={true}
      transitionLeave={true}
      transitionEnterTimeout={2500}
      transitionLeaveTimeout={1500}
      transitionName="animated"
    >
      <div key="amache" className="animated bounceInRight">
        <article className={listWrapperStyles.listWrapper}>
          <div className={listWrapperStyles.listContent}>
            <div>{title}</div>
            {children}
          </div>
        </article>
      </div>
    </ReactCSSTransitionGroup>
  
  )
} 