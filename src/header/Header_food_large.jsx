import React from 'react'
import filpkart_plus from '/images/flipkart-plus_8d85f4.png'
import plus from '/images/plus_aef861.png'
import search_blue from '/images/search_icon_blue.webp'
import cart from '/images/cart_white.svg'
import arrow_down from '/images/more_logo.svg'
import './header_food_large.css'
function Header_food_large() {
  return (
    <div className='health_large_main'>
        <div className='left_blank_div'></div>
        <div className='health_bar'>
            <div className='health_filpkart_main'>
                <div className='health_filkart_div'>
                    <img src={filpkart_plus} alt="" className='health_filpkart_img' />
                    <a href="" className='health_logo_text'>
                        Explore 
                        <span className='health_plus' > Plus</span>
                        <img src={plus} alt="" className='health_plus_img' />
                    </a>
                </div>
            </div>
            <div className='health_search_field'>
                <form action="" className='health_search_form'>
                    <div className='health_search_div'>
                        <input type="text" className='health_search_input' placeholder='Search for products, brands and more' />
                        <button className='health_search_btn'>
                            <img src={search_blue} alt="" className='health_search_logo' />
                        </button>
                    </div>
                </form>
            </div>
            <div className='health_login'>
                <div className='health_login_div'>
                    <a href="" className='health_login_text'>Login</a>
                </div>
            </div>
            <div className='health_become_seller'>
                <a href="" className='health_seller_text'>Become a Seller</a>
            </div>
            <div className='health_more'>
                <div className='health_more_text'>More</div>
                <img src={arrow_down} alt="" className='health_more_img' />
            </div>
            <div className='health_cart'>
                <div className='health_cart_div'>
                    <img src={cart} alt="" className='health_cart_img' />
                    <span className='health_cart_text' >Cart</span>
                </div>
            </div>
        </div>
        <div className='right_blank_div'></div>
    </div>
  )
}

export default Header_food_large