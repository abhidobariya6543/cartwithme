
import React, { useEffect, useState } from 'react'
import './price.css'
import { useFilter} from '../../header/FilterContext'
 
function Price() {
    const {pricesteps}=useFilter()
    const [minIndex,setMinIndex]=useState(0)
    const [maxIndex,setMaxIndex]=useState(pricesteps.length - 1)  
    const {selectedFilters,setSelectFilters,activeFilters} = useFilter()     
    const {priceRange, setPriceRange } =useFilter()

    useEffect(() => {
    if(priceRange.min === pricesteps[0] && priceRange.max === pricesteps[pricesteps.length - 1]) {
        setMinIndex(0)
        setMaxIndex(pricesteps.length - 1)
    }
    }, [priceRange]) 

    const handleMinChange=(e)=>{
        let value =Math.min(Number(e.target.value),maxIndex-1)
        setMinIndex(value)
        if(value >= maxIndex){
            setMaxIndex(value+1)
        } 
        const newPrice={type:'price',min:pricesteps[value],max:pricesteps[maxIndex]}
        setPriceRange(newPrice)
        setSelectFilters([...selectedFilters.filter(f=>f.type !== 'price'),newPrice])//for health_filter component,to appear on the top of the filter
    }
  
    const handleMaxChange =(e)=>{
        let value =Math.max(Number(e.target.value),minIndex+1)
        setMaxIndex(value)
        if(value<= minIndex){
            setMinIndex(value-1)
        }
        const newPrice={type:'price',min:pricesteps[minIndex],max:pricesteps[value]}
        setPriceRange(newPrice)
        setSelectFilters([...selectedFilters.filter(f=>f.type !== 'price'),newPrice])         
    }
    const handleClear=()=>{
        setPriceRange({type:'price',min:pricesteps[0],max:pricesteps[pricesteps.length-1]}) 
        setSelectFilters(prev=> prev.filter(f=>f.type !== 'price')) 
    }
  return (
    <section className='price_main'>
        <div className='price_head' >
            <span className='price_head_text'>PRICE</span>
            <span 
            className={`price_head_clear ${minIndex===0 && maxIndex===pricesteps.length-1 ?'price_clear':'' }`} 
            onClick={()=>{setMinIndex(0);setMaxIndex(pricesteps.length-1);setPriceRange({min:pricesteps[0],max:pricesteps[pricesteps.length-1]});handleClear()}} >CLEAR</span>
        </div>       
        <div className='price_background' >
            <div className="price_bg_div">
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_low' ></div>
            </div>                      
        </div>
        <div className="price_drag_range">
            <div className='slider_container'>
                <input type='range' min={0} max={pricesteps.length-1} step={1} value={minIndex} onChange={handleMinChange} className='thumb thumb_left'/>
                <input type='range'  min={0} max={pricesteps.length-1} step={1} value={maxIndex} onChange={handleMaxChange}  className='thumb thumb_right'/>
                <div className='slider'>
                    <div className='slider_track'/>
                    <div className='slider_range' style={{left:`${(minIndex/(pricesteps.length-1))*100}%`,width:`${((maxIndex-minIndex)/(pricesteps.length-1))*100}%`}}></div>
                </div>
            </div>
            <div className="price_dot">
                {
                    pricesteps.map((p,idx)=>(
                        <div key={p} className="price_each_dot" style={{left:`${(idx/(pricesteps.length-1))*100}%`}}>
                            <span className='dot' >.</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='price_range'>
            <div className='price_min_range'>
                <select name="" id="" onChange={handleMinChange} value={minIndex} className='min_range_select'>
                    {
                        pricesteps.map((p,idx)=>({value:p,idx})).filter((item)=>(item.idx<maxIndex)).map((item)=>(
                            <option value={item.idx} key={item.idx} className='max_range_option'>
                                {typeof item.value === 'number' ? `₹${item.value}`: item.value}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className='price_to'>to</div>         
            <div className='price_max_range'>
                <select name="" id="" className='max_range_select' value={maxIndex} onChange={handleMaxChange}>
                    {
                        pricesteps.map((p,idx)=>({value:p,idx})).filter((item)=>item.idx >minIndex).map((item)=>(
                            <option value={item.idx} key={item.idx} className='max_range_option'>
                                {typeof item.value === 'number' ? `₹${item.value}`: item.value}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    </section>
  )
}

export default Price