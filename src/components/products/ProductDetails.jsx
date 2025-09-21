import React, { useState } from 'react'
import cart_img from '/images/cart_img.svg'
import './ProductDetails.css'
import {imageList,imageSelect,path} from '../adData/ProductDetails.json'
import share_img from '/images/share_img.svg'
import SingleProductPrice from '../body/SingleProductPrice'
import SingleProductOffers from '../body/SingleProductOffers'
import Footer from '../../footer/Footer'
import like from '/images/like_button.svg'


function ProductDetails() {
    const [selectedId,setSelectedId] =useState(1)
    const handleClick = (item)=>{
        setSelectedId(item)
    }
     const selectedImage = imageSelect.find(img=>img.id === selectedId)

  return (
    <div className='product_details_main'>
        <div className='product_details_div'>
            <div className='product_details_left_div'>
                <div className='product_details_left'>
                    <div className='product_images'>
                        <div className='product_imgList'>
                            <ul className='product_img_ul'>                 
                                {
                                    imageList.map((item)=>{
                                        return <li className={`${item.id===6?'product_img_li_last':'product_img_li'} ${item.id===selectedId?'product_img_li_active':''}`} onMouseEnter={()=>handleClick(item.id)} key={item.id}>
                                                    <div className='product_img_main'>
                                                        <div className='product_img_div_list'>
                                                            <img src={item.src} alt="" className='product_img_list' />
                                                        </div>
                                                    </div>
                                                </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='product_selected_img'>
                            <div className='img_render_div'>
                                {
                                    (
                                        <img src={selectedImage.src} alt="" className='selected_img'/>
                                    )
                                }  
                            </div>
                        </div>
                    </div>
                    <div className='product_like'>
                        <img src={like} alt=""/>
                    </div>
                    <div className='product_cart_buy'>
                        <div className='product_cart_buy_div'>
                            <ul className='product_cart_buy_ul'>
                                <li className='product_cart'>
                                    <button className='product_cart_btn'>
                                        <img src={cart_img} alt="" className='product_cart_img' />
                                        ADD TO CART
                                    </button>
                                </li>
                                <li className='product_buy'>
                                    <button className='product_buy_btn'>
                                        <span className='buy_img'></span>
                                        BUY NOW
                                    </button>
                                </li>
                            </ul>
                        </div>   
                    </div>
                </div>
            </div>
            <div className='product_details_right'>  
                <div className='product_details_path' >
                    <div className='product_details_pathWay'>
                        {
                            path.map((item)=>{
                                return  <div key={item.id} className='product_details_eachPath'>
                                            <span className='product_details_pathName'>{item.name}</span>
                                            <img src={item.src} alt="" className={`${item.src===null?'':'product_details_pathImg'}`} />
                                        </div>
                            })
                        }
                    </div>
                    <div className='product_details_share'>
                        <div className='product_share_div'>
                            <img src={share_img} alt=""  className='product_share_img'/>
                            <span className='product_share_text'>Share</span>
                        </div>
                    </div>
                </div> 
                <div>
                    <SingleProductPrice/>
                </div>
                <div>
                    <SingleProductOffers/>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProductDetails