import React, { useState } from 'react'
import Header_food from '../header/Header_food'
import Products from '../components/products/Products'
import {products} from '../components/adData/product.json'
import './food_health.css'
import Header_food_large from '../header/Header_food_large'
import Food_menubar from '../header/Food_menubar'
import Health_body from '../components/body/health_body'
import ProductPage from '../components/products/ProductPage'
  
function Food_health() {
  const [sortType,setSortType]=useState('')
  return (
    <div>
        <div className='food_health_main'>
          <Header_food setSortType={setSortType} sortType={sortType}/>                                                   
          <ProductPage sortType={sortType}/> 
        </div>
        <div className='food_health_large'>
                <Header_food_large/>
                <Food_menubar/>
                <Health_body setSortType={setSortType} sortType={sortType}/>
        </div>
    </div>
    
  )
}

export default Food_health
