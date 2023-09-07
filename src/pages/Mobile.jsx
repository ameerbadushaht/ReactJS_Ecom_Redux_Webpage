import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import Mobile from '../components/Mobile'

function mobile({category}) {
  
  return (
    <Fragment>
    <Header/>
    {/* <ProductList /> */}
    <Mobile />

  </Fragment>
  )
}

export default mobile