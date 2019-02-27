import React, {Component} from 'react'
import NavLeft from 'components/navLeft/navLeft'
import NavTop from 'components/navTop/navTop'
import layoutStyles from './layout.module.scss'
import 'common/css/global.scss'
import 'flex.css/dist/data-flex.css'
import sr from 'components/ScrollReveal/ScrollReveal'
export default class Layout extends Component {
  componentDidMount(){
    var slideRight = {
      distance: '150%',
      origin: 'right',
      opacity: null
    };
    sr.reveal(this.refs.navTop, slideRight)
  }
  render(){
    const { children } = this.props
    return (
      <div className={layoutStyles.container}>
        <div className={layoutStyles.nav}>
          <NavLeft></NavLeft>
        </div>
        <div className="main">
          <div key="amache" className="navTop" ref="navTop">
            <div id="navTop">
              <NavTop></NavTop>
            </div>
          </div>
          {children}
        </div>
      </div>
    )
  }
}