import React from 'react'
import './productCard.css'
import ProductCard from './ProductCard'
import {card} from '../adData/productCard.json'

function ProductsLarge({data}) {
  return (
    <div className='productLarge_main'>
        {
            data.map((item)=>(
                <ProductCard 
                key={item.id} 
                Src={item.src}
                Sponsor={item.sponsor} 
                Name={item.name} 
                quan={item.quan} 
                brand={item.brand}
                rate={item.rating} 
                Count={item.count} 
                assure={item.assure}
                price={item.price}
                prevprice={item.overline}
                discount={item.discount}
                more={item.more}
                more_src={item.more_src}
                quantity={item.quantity}
                />
            ))
        }
        
    </div>
  )
}

export default ProductsLarge