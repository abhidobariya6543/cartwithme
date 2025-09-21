import React, { useState } from 'react'
import './productCard.css';
import white_star from '/images/white_star.svg'
import like from '/images/like_button.svg'
import { useNavigate } from 'react-router-dom';

function ProductCard({Src,Sponsor,Name,quan,brand,rate,Count,assure,price,prevprice,discount,more,more_src,quantity}) {
    const  [hover,setHover]=useState(false)
    const navigate =useNavigate()

    const handleHoverIn=()=>{
        setHover(true) 
    }
    const handleHoverOut=()=>{
        setHover(false)
    }
    const handleClick=(item)=>{
        if(item === 'Happilo'){
            navigate('/food_health/SingleProduct')
        }
    }

  return (
    <div className='card_main' onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} onClick={()=>handleClick(brand)}>
        <div className='card_div' >
            <div className='card_top' >
                <div className='card_top_img' >
                    <div className='card_img_div' > 
                        <img src={Src} alt="" className='card_img'/>
                    </div>
                </div>
                <div className='card_like_img' >
                    <img src={like} alt="" className='like_img' />
                </div>
            </div>
            <div className='card_sponsor' >
                <img src={Sponsor} alt="" className='sponsor_img' />
            </div>
            <div className='card_name' >
                <span className='card_name_text'>{Name}</span>
            </div>
            <div className='card_quantity' >
                <span className='quantity_text' >{quan}</span>
            </div>
            <div className='card_rating' >
                <span className='rating_text'>
                    {rate}
                    <img src={white_star} alt="" className='rating_star' />
                </span>
                <span className='rating_count'>
                    ({Count})
                </span>  
            </div>
            <div className='card_assure' >
                <img src={assure} alt="" className='assure_img' />
            </div>
            <div className='card_price_tag' >
                <div className='card_price' >{price}</div>
                <div className='card_price_overline' >{prevprice}</div>
                <div className='card_discount' >{discount}</div>
            </div>
            <div className={`more_hover ${hover===true? '':'clear_hover'}`}>
                <div className='more_quantity' >
                    {quantity}
                </div>
                <div className='more_text'>{more}
                    <img src={more_src}  alt="" className={`more_hover_img ${more===null?'clear_hover':''}`} />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProductCard