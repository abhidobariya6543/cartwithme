import React from 'react'
import Header_food_large from '../header/Header_food_large'
import Food_menubar from '../header/Food_menubar'
import ProductDetails from '../components/products/ProductDetails'

function SingleProduct() {
  return (
    <div>
      <Header_food_large/>
      <Food_menubar/>
      <ProductDetails/>
    </div>
  )
}

export default SingleProduct