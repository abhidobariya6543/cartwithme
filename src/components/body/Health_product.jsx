import React, { useEffect, useState } from 'react'
import './health_product.css'
import path_img from '/images/path_img.svg'
import ProductsLarge from '../products/ProductsLarge'
import {card} from '../adData/productCard.json'
import { useFilter } from '../../header/FilterContext'
        
function Health_product({onSort,sortType}) {
  const [activeState,setActiveState]=useState(sortType || 'popularity')
  const [product,setProduct]=useState(card)
  const {activeFilters,priceRange} =useFilter()

  const filterOptions = {
      brand: ["Happilo","LIVYOR","MRHERB","Tata Sampann","OPEN SECRET","Nature Aahar"],
      pack_of: ["2-1","2-2","2-3","2-4","2-5","2-6"],
      cust_rate:['4★ & above','3★ & above','2★ & above','1★ & above']
    }
  const handleClick=(key)=>{
    setActiveState(key)
    onSort(key)
  }
  useEffect(()=>{
      let sortedProducts=[...card]
      const brandFilters = activeFilters.filter(f => filterOptions.brand.includes(f))
      const packOfFilters = activeFilters.filter(f => filterOptions.pack_of.includes(f))
      const rateFilters = activeFilters.filter(f=>filterOptions.cust_rate.includes(f))
      if(brandFilters.length>0){
          sortedProducts = sortedProducts.filter((item)=>
          brandFilters.includes(item.brand)
        )      
      }
      if(packOfFilters.length>0){
          sortedProducts = sortedProducts.filter((item)=>
          packOfFilters.includes(item.pack_of)
        )             
      }                             
      if(rateFilters.length>0){
          sortedProducts = sortedProducts.filter((item)=>
           rateFilters.some((filter)=>{
            const filterValue = parseInt(filter[0])
            const productValue=parseInt(item.cust_rate[0])
            return productValue >= filterValue
          })
        )      
      }
      sortedProducts=sortedProducts.filter((item)=>{
        const price =parseInt(item.price.replace(/₹|,/g, ''))
        let minVal =priceRange.min === 'Min'?0 : (priceRange.min === '10000+' ? 10000 :priceRange.min)
        console.log('min',minVal)
        let maxVal = priceRange.max === '10000+'? Infinity : priceRange.max
        return price >= minVal && price <= maxVal
      })
      if(activeState==='popularity'){
          sortedProducts.sort((a,b)=>a.id-b.id)
      }
      if(activeState==='lowtohigh'){
          sortedProducts.sort((a,b)=>parseInt(a.price.replace(/₹|,/g, ''))-parseInt(b.price.replace(/₹|,/g, '')))
      }
      if(activeState==='hightolow'){
          sortedProducts.sort((a,b)=>parseInt(b.price.replace(/₹|,/g, ''))-parseInt(a.price.replace(/₹|,/g, '')))
      }
      if(activeState==='newest'){
          sortedProducts.sort((a,b)=>b.id-a.id)
      }           
      setProduct(sortedProducts)
  },[activeState,activeFilters,priceRange])
  const sort=[
    {key:'popularity',name:'Popularity'},
    {key:'lowtohigh',name:'Price -- Low to High'},
    {key:'hightolow',name:'Price -- High to Low'},
    {key:'newest',name:'Newest First'}
  ]
  return (
    <div className='health_product_main'>
      <div className='health_product_div'>
          <div className='health_product_path'>
              <div className='each_page'>  
                <span className='home_text'>Home</span>
                <img src={path_img} alt="" className='arrow_left' />
              </div>
              <div className='each_page'>
                <span className='home_text'>Food Products</span>
                <img src={path_img} alt="" className='arrow_left' />
              </div>
              <div className='each_page'>
                <span className='home_text'>Dry Fruit, Nut & Seed</span>
                <img src={path_img} alt="" className='arrow_left arrow_display' />
              </div>
          </div>
          <div className='health_product_details'>
              <p className='detailed_para'>
                Dry fruits are healthy and nutritional snacks. They are beneficial for health in several ways. 
                They help in improving digestion, memory and other metabolic functions of the body. They help in maintaining 
                glucose levels and blood pressure. You can keep these handy when you are travelling. A box of dry fruits also 
                makes for a great gift and is often given to family and friends on auspicious occasions. A usual pack will contain 
                almonds, cashews, pistachios, figs, and more. They make for a perfect gift. Nuts and seeds are also used to garnish 
                both sweet and savoury dishes. Dry fruit and nuts online price depend on the brand and the quantities available. 
                You can also choose from organic nuts and seeds, according to your requirements. You can also opt for a mix
                if you do not want to buy individual packs of nuts and fruits. Buy top quality nuts from trusted brands such as
                <a href=""> Happilo</a>  , Naturoz, <a href="">Granola</a> , Tulsi, Nutraj, Scorist, and many more. You can place 
                an order online and get your favourite packs of nuts and fruits according to your requirements. You can get these 
                delivered to your doorstep without any hassles.
              </p>
              <p className='detailed_para'><br /></p>
          </div>
          <h1 className='health_product_head'>
              Dry Fruits, Nut & Seed
          </h1>
          <span className='health_product_span'>
              (Showing 1 - 40 products of 5,965 products)
          </span>
          <div className='health_product_sort'>
              <span className='health_sort_text'>Sort By</span>
              {   
                sort.map((item)=>{
                  return <div key={item.key} className={`popularity_text ${activeState===item.key?'text_active':''}`} onClick={()=>handleClick(item.key)}>{item.name}</div> 
                })
              }
          </div>
      </div>
      <ProductsLarge data={product}/>
    </div>
  )
}

export default Health_product


