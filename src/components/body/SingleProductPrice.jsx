import React from 'react'
import './SingleProductPrice.css'
import white_star from '/images/white_star.svg'
import assurance from '/images/assurance.png'
import price_info from '/images/price_info.svg'

function SingleProductPrice() {
  return (
    <div className='product_details_price'>
        <div>
            <h1 className='product_name'>
                Happilo Premium Naturals Californian Almonds Almonds  (1 x 200 g)
            </h1>
        </div>
        <div className='product_details_rating'>
            <div className='product_details_overall'>
                <div className='product_overall_rating'>
                    4.4
                    <img src={white_star} alt=""  className='white_star'/>
                </div>
                <span className='product_customer_rating'>
                    <span className='product_customer_number'>1,95,240 Ratings & 17,160 Reviews</span>
                </span>
            </div>
            <span className='product_fassured'>
                <img src={assurance} alt="" className='product_assure_img' />
            </span>
        </div>
        <div className='product_special_price' >
            <span className='special_price_text'>Special Price</span>
        </div>
        <div className='product_price'>
            <div className='product_discount'>
                <div className='price'>₹224</div>
                <div className='overline'>₹275</div>
                <div className='discount'>18% off</div>
            </div>
            <div className='product_price_info'>
                <img src={price_info} alt="" className='price_info_img' />
            </div>
            <div className='product_quantity_info'>@280/250g</div>
        </div>
        <div className='product_alert_message'>
            Hurry, Only a few left!
        </div>
    </div>
  )
}

export default SingleProductPrice