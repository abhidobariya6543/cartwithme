import React, { useEffect, useState } from 'react'
import dataJson from '../adData/product.json'
import Sort from '../../header/Sort'  
import Products from './Products'
      
function ProductPage({sortType}) {
    const [products,setProducts]=useState(dataJson.products)
    useEffect(()=>{
         let sortedProducts=[...products]
        if(sortType === 'popularity'){
            sortedProducts.sort((a,b)=>a.id - b.id) 
        }
        if (sortType === 'lowToHigh'){
            sortedProducts.sort((a,b) => parseInt(a.price.replace(/₹|,/g, '')) - parseInt(b.price.replace(/₹|,/g, '')))
        }
        if (sortType === 'highToLow'){
            sortedProducts.sort((a,b) => parseInt(b.price.replace(/₹|,/g, '')) - parseInt(a.price.replace(/₹|,/g, '')))
        }
        if (sortType === 'newest'){
            sortedProducts.sort((a,b)=>b.id - a.id)
        }
        setProducts(sortedProducts)
    },[sortType])
  return (
    <div>
        <Products data={products} />
    </div>
  )
}

export default ProductPage