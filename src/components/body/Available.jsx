import React, { useState } from 'react'
import './type.css'
import arrow_down from '/images/filter_arrow_left.svg'
  

function Available() {
    const [active,setActive]=useState(false)
    const [selectedItems,setSelectedItems] = useState([])
    const handleClick = (item)=>{
        if(selectedItems.includes(item)){
            return setSelectedItems(selectedItems.filter((i)=>i !== item))
        }
        else{
            return setSelectedItems([...selectedItems,item])
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
    const data=[
        {
            id:1,
            name:'Include Out of Stock'
        }
    ]
  return (
        <section className='type_main' >
            <div className='type_head_text' onClick={()=>handleActiveClick()} ><span className='type_head_span'>AVAILABILITY</span><img src={arrow_down} alt="" className={`type_head_img ${active===true?'':'rotate'}`} /></div>
            <div className={`${active===true?'type_content':'type_content_none'}`} >
                {
                    data.map((item)=>(
                        <div className='type_content_list' onClick={()=>handleClick(item.id)} key={item.id} >
                            <label htmlFor="" className='type_label' >
                                <input type="checkbox" className='checkbox_field' />
                                <div className={` checkbox ${selectedItems.includes(item.id) ? 'checkbox_active':''}`}></div>
                                <div className='type_elements' >{item.name}</div>
                            </label>
                        </div>
                    ))
                }
                    
            </div>
        </section>
  )
}

export default Available