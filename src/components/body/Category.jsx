import React, { useState } from 'react'
import './category.css'
import arrow_left from '/images/filter_arrow_left.svg'

function Category() {
  const [active,setActive]=useState(false)
  const handleClick =()=>{
    if(active===true){
     return setActive(false)
    }
    else{
     return setActive(true)
    }
  }
  return (
      <section className='category_main'>
          <div className='category_head'><span className='category_head_text'>CATEGORIES</span></div>
          <div className='category_sbhead'><img src={arrow_left} alt="" className='arrow_left_logo' /><span className='category_sbhead_text' >Food Products</span></div>
          <div className='category_sbhead dry_fruit'><img src={arrow_left} alt="" className={`arrow_left_logo arrow_black ${active===true? 'rotate':''}`} onClick={()=>handleClick()} /><span className='category_sbhead_text text_black' >Dry Fruit, Nut & Seed</span></div>
          <div className={`${active===true? 'category_content':'content_none'}`}>
              <a className='category_list'>Dry Fruits</a>
              <a className='category_list'>Dry Fruits Gift Pack</a>
              <a className='category_list'>Edible Seed</a>
              <a className='category_list'>Mixed Dry Fruits</a>
          </div>
          
      </section>
  )
}

export default Category