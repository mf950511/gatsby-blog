import React, {Component} from 'react'
import NavLeft from 'components/navLeft/navLeft'
import NavTop from 'components/navTop/navTop'
import { Scrollbars } from 'react-custom-scrollbars';
import layoutStyles from './layout.module.scss'
import 'flex.css/dist/data-flex.css'
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
        id="container"
        onScroll={this.handleScroll}
        className={layoutStyles.main} 
        data-flex="dir:top">
          <div>
            <NavTop></NavTop>
          </div>
          {children}
          
        </Scrollbars>
      </div>
    )
  }
  handleScroll(event){
    console.log(event)
  }
}