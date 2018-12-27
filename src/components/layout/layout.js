import React, {Component} from 'react'
import NavLeft from 'components/navLeft/navLeft'
import NavTop from 'components/navTop/navTop'
import { Scrollbars } from 'react-custom-scrollbars';
import layoutStyles from './layout.module.scss'
import './global.scss'
import 'flex.css/dist/data-flex.css'
import "animate.css"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
export default class Layout extends Component {
  constructor(props){
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    
  }
  render(){
    const { children } = this.props
    return (
      <div className={layoutStyles.container} data-flex="box:first">
        <div className={layoutStyles.nav}>
          <NavLeft></NavLeft>
        </div>
        <Scrollbars 
        onScroll={this.handleScroll}
        className="main"
        data-flex="dir:top">
          <ReactCSSTransitionGroup
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={1500}
            transitionName="animated"
          >
            <div key="amache" className="navTop animated pulse">
              <div id="navTop">
                <NavTop></NavTop>
              </div>
            </div>
          </ReactCSSTransitionGroup>
          
          {children}
        </Scrollbars>
      </div>
    )
  }
  handleScroll(event){
    this.props.handleScroll(event)
  }
}