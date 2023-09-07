import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import Laptop from '../components/Laptop'
function laptop({category}) {
  
  return (
    <Fragment>
    <Header/>
    {/* <ProductList /> */}
    <Laptop />

  </Fragment>
  )
}

export default laptop