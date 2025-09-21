import React from 'react'
import './health_filter.css'
import Category from './Category'
import Type from './Type'
import Brand from './Brand'
import Container_type from './Container_type'
import Customer_rating from './Customer_rating'
import Price from './Price'
import Discount from './Discount'
import Remaining_filter from './Remaining_filter'
import Pack_of from './Pack_of'
import { useFilter } from '../../header/FilterContext'

function Health_filter() {
  const {selectedFilters,setSelectFilters,setActiveFilters,pricesteps,setPriceRange}=useFilter()
  const handleClearAll=()=>{
    setSelectFilters([])
    setActiveFilters([])
    setPriceRange({min:pricesteps[0],max:pricesteps[pricesteps.length-1]})
  }
  const handleClearEach=(item)=>{
    if(item.type === 'price'){
      setPriceRange({min:pricesteps[0],max:pricesteps[pricesteps.length-1]})
      setSelectFilters(prev=>prev.filter(f=>f.type !== 'price'))
    }
    if(item.type === 'pack_of'){
      setSelectFilters(prev=>prev.filter(f=>!(f.type === item.type && f.value === item.value)))
      setActiveFilters(prev=>prev.filter(f=>f !== `2-${item.id}`))
    }
    else{
      setSelectFilters(prev=>prev.filter(f=>!(f.type === item.type && f.value === item.value)))
      setActiveFilters(prev=>prev.filter(f=>f !== item.value))
    }
  }
  return (
    <div className='health_filter_main'>
        <div className='health_filter_div'>
            <section className='health_filter_text'>
              <div className='filter_head_text' >
                  <span className='health_text_span'>Filters</span>
                  <span className={`health_clear_all ${selectedFilters.length===0?'clear_filter':''}`} onClick={handleClearAll} >CLEAR ALL</span>   
              </div>
              <div className='filter_selected_list'>
              {
              selectedFilters.map((item)=>(
                  <div className='filter_div' onClick={()=>handleClearEach(item)}>
                    <div className='filter_clear' >✕</div>
                    {
                      item.type==='price' ? <div className='filter_selected' >{item.min}-{item.max}</div> : item.type ==='brand' || 'pack_of'||'rating' ? <div className='filter_selected'>{item.value}</div> : <div></div>
                    }
                  </div>
              ))
            }
            </div>
            </section> 
            <Category/>
            <Type/>
            <Brand />
            <Container_type/>
            <Pack_of/>
            <Customer_rating/>
            <Price/>
            <Discount/>
            <Remaining_filter/>
        </div>
    </div>
  )
}

export default Health_filter