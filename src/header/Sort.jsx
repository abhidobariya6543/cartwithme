import React, { useEffect, useState } from 'react'
import './Sort.css'
import active_radio from '/images/active_radio.webp'
import inactive_radio from '/images/inactive_radio.webp'
   
function Sort({onclose ,onSort,sortType}) { 
    console.log("sort props:",{onclose,onSort})   
    const [visible,setVisible]=useState(false)
    const [active,setActive]=useState(sortType || 'popularity')
    const [close,setClose]=useState(false)
    const handleClick=(key)=>{
        setActive(key)
        if (typeof onSort === 'function'){
            onSort(key) 
        } 
    }
    useEffect(()=>{
        setTimeout(()=>setVisible(true),10)
        document.body.style.overflow='hidden'
        return ()=>{
            document.body.style.overflow='auto'
        }
    })
    const handleClose=()=>{
        setVisible(false)
        setClose(true)
        setTimeout(() => {
            onclose()
        },300);
    }
    const options=[
        {key:'popularity',label:'Popularity'},
        {key:'lowToHigh',label:'Price -- Low to High'},
        {key:'highToLow',label:'Price -- High to Low'},
        {key:'newest',label:'Newest First'}
    ]  
  return (
    <div className={`sort_background ${visible && !close? 'show':'hide'}`} onClick={handleClose}>
        <div className={`sort_main ${visible && !close? 'open':'close'}`} onClick={e=>e.stopPropagation()}>
            <div className='sort_head'>SORT BY</div>
            <div className='sort_border'></div>           
            <div className='sort_content'>
                 {
                    options.map((item)=>{
                        return <div className='sort_list' key={item.key} onClick={()=>{setActive(item.key);handleClick(item.key);handleClose()}}>        
                                    <span className='sort_content'>{item.label}</span>
                                    <div className='sort_img_div'>
                                        <img src={`${active===item.key? active_radio : inactive_radio}`} alt=""  className='sort_img'/>
                                    </div>
                                </div>
                    })
                 }
            </div>
        </div>
    </div>
  )
}

export default Sort