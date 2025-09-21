import React, { useEffect, useRef, useState } from 'react'
import './BuyProduct.css'
import go_back_arrow from '/images/goback_arrow_black.svg'
import flipfoodlogo from '/images/flipfoodlogo.png'
import searchIcon from '/images/search-icon.svg'
import cart from '/images/Cart.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import like from '/images/buyproduct_like.svg'
import share from '/images/buyproduct_share.svg'
import star from '/images/green_star.svg'
import Buyproduct_Body from '../components/body/Buyproduct_Body'

function BuyProduct() {
    const navigate=useNavigate()
    const location = useLocation()
    const product = location.state?.product
    const imageSelect = product ? [
        {
            id: 1,
            src: product.src || "/images/mobile.jpg"
        },
        {
            id: 2,
            src: "/images/img2_selected.webp"
        },
        {
            id: 3,
            src: "/images/img3_selected.webp"
        },
        {
            id: 4,
            src: "/images/img4_selected.webp"
        },
        {
            id: 5,
            src: "/images/img5_selected.webp"
        },
        {
            id: 6,
            src: "/images/img6_selected.webp"
        }
    ] : [
        {
            id:1,
            src:"/images/happilo_selected.webp"
        },
        {
            id:2,
            src:"/images/img2_selected.webp"
        },
        {
            id:3,
            src:"/images/img3_selected.webp"
        },
        {
            id:4,
            src:"/images/img4_selected.webp"
        },
        {
            id:5,
            src:"/images/img5_selected.webp"
        },
        {
            id:6,
            src:"/images/img6_selected.webp"
        }
    ]

const [currentIndex, setCurrentIndex]=useState(0)

const sliderRef=useRef(null)

const handleScroll = ()=>{
    const slider =sliderRef.current
    if(!slider) return
    const index =Math.round(slider.scrollLeft/slider.clientWidth)
    setCurrentIndex(index)
}

useEffect(()=>{
    const slider =sliderRef.current
    if (slider) slider.addEventListener('scroll',handleScroll)
    return ()=>{
        if(slider) slider.removeEventListener('scroll',handleScroll)
    }
},[])

  return (
    <div className='buyproduct_main'>
        <div className='buyproduct_div'>
            <a onClick={()=>navigate(-1)} className='buyproduct_goback'><img src={go_back_arrow} alt="" /></a>
            <a href="" className='buyProduct_logo'><img src={flipfoodlogo} alt="" className='filp_logo'/></a>
            <a href="" className='buyproduct_search'><img src={searchIcon} alt="" className='search_logo'/></a>
            <a href="" className='buyproduct_cart buyproduct_search'><img src={cart} alt="" className='cart_img'/></a>
            <a href="" className='buyproductd_login'><span className='login_text'>Login</span></a>
        </div>
        <div className='scroll_main'>
            <div className='scroll_slider' ref={sliderRef}>
                {
                    imageSelect.map((item)=>(
                        <div className='scroll_slide' key={item.id}>
                            <img src={item.src} alt="" className='slider_img'/>
                        </div>
                    ))
                }
                <div className='buyproduct_festive'>
                    <div className='festive_text'>FESTIVE SPECIALS</div>
                </div>
                <div className='buyproduct_likeshare'>
                    <div className='buyproduct_like'><img src={like} alt="" className='' /></div>
                    <div className='buyproduct_share'><img src={share} alt="" className='' /></div>
                </div>
                <div className='buyproduct_expiry'>
                    <div className='expiry_text'><span>Expiry</span> 21 jan 2026</div>
                </div>
                <div className='buyproduct_rating'>
                    <div className='rating_number'>4.4</div>
                    <img src={star} alt="" />
                    <div className='rating_count'>| 1.9L+</div>
                </div>
            </div>
            <div className='slider_indicators_main'>
                <div className='slider_indicators'>
                    {
                        imageSelect.map((_,index)=>(
                            <span  key={index} className={`dot ${index === currentIndex ? 'active':''}`}></span>      
                        ))
                    }
                </div>
            </div>
        </div>
        <Buyproduct_Body product={product}/>
    </div>
  )
}

export default BuyProduct
