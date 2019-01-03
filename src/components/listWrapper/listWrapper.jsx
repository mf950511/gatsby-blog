import React from 'react'
import "animate.css"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import listWrapperStyles from './listWrapper.module.scss'
export default class ListWrapper extends React.Component{
  render(){
    const {children, title, flag} = this.props
    // const animateArr = ['bounceInRight','fadeInRightBig','rotateInDownRight','slideInRight','zoomInRight','zoomInLeft']
    // bounceInRight fadeInRightBig rotateInDownRight slideInRight zoomInRight zoomInLeft
    // const animateIndex = parseInt(Math.random() * 6)
    // const animate = animateArr[animateIndex]
    const animate = 'rotateInDownRight'
    return (
      <ReactCSSTransitionGroup
        transitionEnter={true}
        transitionLeave={true}
        transitionEnterTimeout={2500}
        transitionLeaveTimeout={1500}
        transitionName="animated"
      >
        <div key="amache" className={`blogList animated ${flag ? animate : listWrapperStyles.hide}`}>
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
}