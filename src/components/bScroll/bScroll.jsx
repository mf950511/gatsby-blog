import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './scroll.module.scss'
export default class Scroll extends React.Component{
  componentDidUpdate(){
    if(this.bScroll && this.props.refresh === true) {
      this.bScroll.refresh()
    }
  }
}