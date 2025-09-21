import React, { useState } from 'react'
import './type.css'
import f_assure from '/images/f_assure.png'
  

function Assure() {
    const [active,setActive]=useState(false)
    const handleClick = ()=>{
        if(active===true){
            return setActive(false)
        }
        else{
            return setActive(true)
        }
    }
  return (
        <section className='type_main' >
                <div className='' onClick={()=>handleClick()}>
                    <label htmlFor="" className='f_assure_label' >
                        <input type="checkbox" className='checkbox_field' />
                        <div className={` checkbox checkbox_assure ${active===true ? 'checkbox_active':''}`}></div>
                        <div className='type_elements f_assure' ><img src={f_assure} alt="" className='assure_img' /></div>
                    </label>
                </div>
                <div></div>  
        </section>
  )
}

export default Assure