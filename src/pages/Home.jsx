
import React, { Fragment } from 'react'
import ProductList from '../components/productList/ProductList'
import Header from '../components/header/Header'

function Home() {
  return (
    <Fragment>
    <Header/>
    <ProductList />
  </Fragment>
  )
}

export default Home