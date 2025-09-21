import React, { useState } from 'react'
import './type.css'
import arrow_down from '/images/filter_arrow_left.svg'
import { useFilter } from '../../header/FilterContext'
  

function Customer_rating() {
    const [active,setActive]=useState(false)
    const {activeFilters,setActiveFilters}=useFilter()
    const {setSelectFilters}=useFilter()
    const [clear,setClear]=useState([])
    const handleClick = (item)=>{
        if(activeFilters.includes(item)){
             setActiveFilters(activeFilters.filter((i)=>i !== item))
             setSelectFilters(prev=>prev.filter(f=>!(f.type ==='rating' && f.value === item)))//for health_filter component,to appear on the top of the filter
             setClear(prev=>prev.filter(f=>!(f.type === 'rating' && f.value === item)))
        }
        else{
             setActiveFilters([...activeFilters,item])
             setSelectFilters(prev=>[...prev,{type:'rating',value:item}])
             setClear(prev=>[...prev,{type:'rating',value:item}])
        }
    }
    const handleActiveClick=()=>{
        if(active===true){
            return setActive(false)
        }
        else{
            return setActive(true)
        }
    }
    const handleClear =()=>{
        setActiveFilters(prev=>prev.filter(i=>!data.some(d=>d.name === i)))
        setSelectFilters(prev=>prev.filter(f=>f.type !== 'rating'))
        setClear(prev=>prev.filter(f=>f.type !== 'rating'))
    }
    const data=[
        {
            id:1,
            name:'4★ & above'
        },
        {
            id:2,
            name:'3★ & above'
        },
        {
            id:3,
            name:'2★ & above'
        },
        {
            id:4,
            name:'1★ & above'
        }
    ]
  return (
        <section className='type_main' >
            <div className='type_head_text' onClick={()=>handleActiveClick()} ><span className='type_head_span'>CUSTOMER RATING</span><img src={arrow_down} alt="" className={`type_head_img ${active===true?'':'rotate'}`} /></div>
            <div className={`${active===true?'type_content':'type_content_none'}`} >
                <div className={`clear_all ${clear.length===0 || activeFilters.length===0?'clear_brand':''}`} onClick={handleClear} >
                    <div className='clear_x'>✕</div>
                    <div className='clear_text'>Clear All</div>  
                </div> 
                {
                    data.map((item)=>(
                        <div className='type_content_list' onClick={()=>handleClick(item.name)} key={item.id}>
                            <label htmlFor="" className='type_label' >
                                <input type="checkbox" className='checkbox_field' />
                                <div className={` checkbox ${activeFilters.includes(item.name) ? 'checkbox_active':''}`}></div>
                                <div className='type_elements' >{item.name}</div>
                            </label>
                        </div>
                    ))
                }
                    
            </div>
        </section>
  )
}

export default Customer_rating