import React, { useEffect, useRef, useState } from 'react'
import '../advertisement/advertisement.css'


function SmartPhone({data,datatwo}) {
    const scrollRef =useRef(null)
    const [showArrowRight,setShowArrowRight]=useState(false)
    const [showArrowLeft,setShowArrowLeft]=useState(false)

    useEffect(()=>{
        const checkScroll =()=>{
            if(scrollRef.current){
                const { scrollWidth , clientWidth, scrollLeft} =scrollRef.current
                setShowArrowRight(scrollWidth > clientWidth && scrollLeft + clientWidth < scrollWidth-1)
                setShowArrowLeft(scrollLeft > 1)
            }
        }
        const el =scrollRef.current
        if(el){
            el.addEventListener('scroll', checkScroll)
        }
        window.addEventListener('resize',checkScroll)
        checkScroll()
        return ()=>{
            if(el){
                el.removeEventListener('scroll',checkScroll)
            }
            window.removeEventListener('resize',checkScroll)
        }
    },[])

    const handleScrollRight = ()=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({
                left:200,
                behavior:"smooth"
            })
        }
    }

    const handleScrollLeft = ()=>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({
                left:-200,
                behavior:"smooth"
            })
        }
    }    

  return (
    <div className='smartphone-maindiv'>
        <div className='smartphone-hddiv'>
            <div className='smartphone-heading'>
                <div className='smartphone_hd_pad'>Best Deals on Smartphones</div>
                <div className='smartphone_hd_lg'>Best of Electronics</div>
            </div>
            <div className='smartphone-overflow'>
                <div className='smartphone-collection' ref={scrollRef}>
                    {
                        showArrowLeft && (
                            <button className='smartphone_button_left' onClick={handleScrollLeft}>
                                <span className='smartphone_arrow_left'></span>
                            </button>
                        )
                    }
                    {
                        data.map((item)=>{
                            return <a href="" className='smarphoneLap' key={item.id}>
                                        <div className='smartphone'>
                                            <div className='smartphone-img'>
                                                <img src={item.src} alt={item.alt} /> 
                                            </div>
                                            <div className='smartphone-brand'>{item.name}</div>
                                            <div className='price-tag'>{item.price}</div>
                                        </div>
                                    </a>
                        })
                    }
                    {
                        datatwo.map((item)=>{
                            return <a href="" className='smartphoneLarge'key={item.id}>
                                        <div className='smartphone'>
                                            <div className='smartphone-img'>
                                                <img src={item.src} alt={item.alt} /> 
                                            </div>
                                            <div className='smartphone-brand'>{item.name}</div>
                                            <div className='price-tag'>{item.price}</div>
                                        </div>
                                    </a>
                        })
                    }
                    {
                        showArrowRight &&(
                            <button className='smartphone_button_right' onClick={handleScrollRight}>
                                <span className='smartphone_arrow_right'></span>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmartPhone