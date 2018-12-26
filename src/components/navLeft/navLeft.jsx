import React from 'react'
import AuthorInfo from '../authorInfo/anthorInfo'
import NavLeft from './navLeft.module.scss'
export default () => (
  <div className={NavLeft.navLeft} data-flex="main:center cross:center">
    <div className={NavLeft.overlay}></div>
    <AuthorInfo></AuthorInfo>
  </div>
)