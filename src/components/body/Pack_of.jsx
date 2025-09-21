import React, { useState } from 'react'
import './type.css'
import arrow_down from '/images/filter_arrow_left.svg'
import { useFilter } from '../../header/FilterContext'
  

function Pack_of() {
    const [active,setActive]=useState(false)
    const {activeFilters,setActiveFilters}=useFilter()
    const {selectedFilters,setSelectFilters}=useFilter()
    const [clear,setClear]=useState([])
    const handleClick = (item,name)=>{
        let filterValue = `2-${item}`
        let newFilters
        if(activeFilters.includes(filterValue)){
            newFilters= activeFilters.filter((i)=>i !== filterValue)
            setSelectFilters(prev=>prev.filter(f=>!(f.type === 'pack_of' && f.value === name)))//for health_filter component to appear on the top of the filter
            setClear(prev=>prev.filter(f=>!(f.type === 'pack_of' && f.value === item)))
        }
        else{
            newFilters=[...activeFilters,filterValue]
            setSelectFilters(prev=>[...prev,{type:'pack_of',value:name,id:item}])
            setClear(prev=>[...prev,{type:'pack_of', value:item,id:item}])
        }
        setActiveFilters(newFilters)
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
        setActiveFilters(prev => prev.filter(i => !i.startsWith('2-')))
        setSelectFilters(prev => prev.filter(f => f.type !== 'pack_of'))
        setClear(prev=>prev.filter(f=>f.type !== 'pack_of'))
    }
    const data=[
        {
            id:1,
            name:'1'
        },
        {
            id:2,
            name:'2'
        },
        {     
            id:3,
            name:'3'
        },
        {
            id:4,
            name:'4'
        },
        {
            id:5,
            name:'10 & Above'
        },
        {
            id:6,
            name:'5-10'
        }
    ]
  return (
        <section className='type_main' >
            <div className='type_head_text' onClick={()=>handleActiveClick()} ><span className='type_head_span'>PACK OF</span><img src={arrow_down} alt="" className={`type_head_img ${active===true?'':'rotate'}`} /></div>
            <div className={`${active===true?'type_content':'type_content_none'}`} >
                <div className={`clear_all ${clear.length===0 || activeFilters.length===0?'clear_brand':''}`} onClick={handleClear} >
                    <div className='clear_x'>✕</div>
                    <div className='clear_text'>Clear All</div>  
                </div> 
                {
                    data.map((item)=>(
                        <div className='type_content_list' onClick={()=>handleClick(item.id,item.name)} key={item.id}>   
                            <label htmlFor="" className='type_label' >
                                <input type="checkbox" className='checkbox_field' />
                                <div className={` checkbox ${activeFilters.includes(`2-${item.id}`) ? 'checkbox_active':''}`}></div>
                                <div className='type_elements' >{item.name}</div>
                            </label>
                        </div>
                    ))
                }
                    
            </div>
        </section>
  )
}

export default Pack_of