import React from 'react'
import { Link } from 'gatsby'
import PaganationStyles from './paganation.module.scss'
export default class Paganation extends React.Component {
  render(){
    let count = this.props.count
    let limit = this.props.limit
    let currentIndex = this.props.currentIndex
    let baseUrl = this.props.baseUrl
    let numPage = Math.ceil(count/limit)
    console.log(baseUrl)
    if(numPage === 1) {
      return null
    }
    return (
      <div className={PaganationStyles.paganation}>
        <Link className={`${currentIndex === 0 ? PaganationStyles.hide : PaganationStyles.extend}`} to={`${baseUrl}${currentIndex - 1}`}>« Prev</Link>
        {
          Array.from({length: numPage}).map((item, index) => {
            return <Link to={`${baseUrl}${index === 0 ? '' : (index+1)}`} className={`${PaganationStyles.pageNumber} ${currentIndex === index ? PaganationStyles.current : ''}`} key={index}>{index+1}</Link>
          })
        }
        <Link className={`${currentIndex < numPage - 1 ? PaganationStyles.extend : PaganationStyles.hide}`} to={`${baseUrl}${currentIndex + 1}`}>Next »</Link>
      </div>
    )
  }
}