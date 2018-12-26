import React from 'react'
import AuthorInfo from '../authorInfo/anthorInfo'
import NavTop from './navTop.module.scss'
export default () => (
  <div className={NavTop.navTop}>
    <AuthorInfo></AuthorInfo>
  </div>
)