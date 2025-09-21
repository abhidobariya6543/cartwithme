import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cart.css'
import go_back_arrow from '/images/goback_arrow_black.svg'
import flipkartlogo from '/images/flipkart-logo.svg'
import searchIcon from '/images/search-icon.svg'
import cart from '/images/Cart.svg'
import star from '/images/green_star.svg'
import protectPromise from '/images/buyproduct_f-assure.svg'
import productsData from '../data/productsData.json'

function Cart() {
    const navigate = useNavigate()
    
    const [cartItems, setCartItems] = useState(productsData.cartItems)

    const [extendedWarranty, setExtendedWarranty] = useState(false)
    const [showPriceDetails, setShowPriceDetails] = useState(false)
    const [showMoreOffers, setShowMoreOffers] = useState(false)

    const calculateTotal = () => {
        const itemsTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0)
        const protectPromiseTotal = cartItems.reduce((sum, item) => sum + (item.protectPromiseFee || 0), 0)
        const warrantyFee = extendedWarranty ? 69 : 0
        const discount = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.currentPrice) * item.quantity), 0)
        const couponDiscount = 150
        
        return {
            itemsTotal,
            protectPromiseTotal,
            warrantyFee,
            discount,
            couponDiscount,
            total: itemsTotal - discount - couponDiscount + protectPromiseTotal + warrantyFee
        }
    }

    const totals = calculateTotal()

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(items => 
            items.map(item => 
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    const handleRemoveItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id))
    }

    const handleSaveForLater = (id) => {
        // Implement save for later functionality
        console.log('Save for later:', id)
    }

    const handleBuyNow = (id) => {
        // Navigate to single item checkout
        navigate('/checkout/address', { state: { singleItem: cartItems.find(item => item.id === id) } })
    }

    const handlePlaceOrder = () => {
        navigate('/checkout/address')
    }

    return (
        <div className='cart_main'>
            {/* Header */}
            <div className='cart_header'>
                <button onClick={() => navigate(-1)} className='cart_back_btn'>
                    <img src={go_back_arrow} alt="Back" />
                </button>
                <h1 className='cart_title'>My Cart</h1>
                <div className='cart_header_right'>
                    <span className='delivery_text'>From Saved Addresses</span>
                    <button className='pincode_btn'>Enter Delivery Pincode</button>
                </div>
            </div>

            {/* Cart Items */}
            <div className='cart_items'>
                {cartItems.map((item) => (
                    <div key={item.id} className='cart_item_flipkart'>
                        {/* Main Container */}
                        <div className='cart_item_main'>
                            {/* Left Side - Product Image and Quantity */}
                            <div className='left_section'>
                                <div className='product_image_container'>
                                    <img src={item.image} alt={item.name} className='product_image' />
                                </div>
                                <div className='quantity_section'>
                                    <div className='quantity_display'>Qty: {item.quantity}</div>
                                    <select 
                                        value={item.quantity} 
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        className='qty_select'
                                    >
                                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Right Side - Product Details */}
                            <div className='right_section'>
                                {/* Product Info */}
                                <div className='product_info'>
                                    <div className='product_name'>{item.name}</div>
                                    <div className='product_variant'>{item.variant}</div>
                                    
                                    {/* Rating and Assured */}
                                    <div className='rating_assured_row'>
                                        <div className='rating_stars'>
                                            <div className='stars_container'>
                                                {[1,2,3,4,5].map((starNum) => (
                                                    <div key={starNum} className={`star ${starNum <= Math.floor(item.rating) ? 'filled' : ''}`}>
                                                        ★
                                                    </div>
                                                ))}
                                            </div>
                                            <span className='rating_value'>{item.rating}</span>
                                            <span className='rating_separator'>•</span>
                                        </div>
                                        <div className='review_count'>({item.reviews})</div>
                                        {item.assured && (
                                            <div className='assured_badge'>
                                                <img src='/images/buyproduct_f-assure.svg' alt="Assured" className='assured_icon' />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Pricing Section */}
                                <div className='pricing_section'>
                                    <div className='price_row'>
                                        <div className='discount_badge'>
                                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                                                <path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00"></path>
                                            </svg>
                                            <span className='discount_text'>{item.discount}%</span>
                                        </div>
                                        <div className='original_price'>₹{item.originalPrice}</div>
                                        <div className='current_price'>₹{item.currentPrice}</div>
                                    </div>
                                </div>

                                {/* WOW Offer */}
                                <div className='wow_offer_section'>
                                    <div className='wow_badge'>
                                        <img src='/images/wowdeal.svg' alt="WOW" className='wow_icon' />
                                    </div>
                                    <div className='wow_price'>Buy at ₹{item.wowPrice}</div>
                                </div>

                                {/* Alternative Payment */}
                                <div className='alternative_payment_section'>
                                    <span className='alt_text'>Or Pay </span>
                                    <span className='alt_price'>₹{item.wowPrice} + </span>
                                    <img src='/images/lightning-icon.svg' alt="Coins" className='coin_icon' />
                                    <span className='coin_count'>47</span>
                                </div>

                                {/* Delivery Info */}
                                {/* <div className='delivery_section'>
                                    <div className='delivery_text'>Delivery by {item.deliveryDate}</div>
                                </div> */}
                            </div>
                        </div>

                        {/* Action Buttons - Bottom Row */}
                        <div className='action_buttons_section'>
                            <button className='action_button save_button' onClick={() => handleSaveForLater(item.id)}>
                                <svg width="16" height="16" viewBox="0 0 256 256">
                                    <path fill="none" d="M0 0h256v256H0z"></path>
                                    <path d="M208 216H48a8 8 0 0 1-8-8V72l16-32h144l16 32v136a8 8 0 0 1-8 8Z" fill="none" stroke="#717478" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                                    <path fill="none" stroke="#717478" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M94.1 150.1 128 184l33.9-33.9M128 104v80M40 72h176"></path>
                                </svg>
                                <span>Save for later</span>
                            </button>
                            
                            <button className='action_button remove_button' onClick={() => handleRemoveItem(item.id)}>
                                <svg width="16" height="16" viewBox="0 0 256 256">
                                    <path fill="none" d="M0 0h256v256H0z"></path>
                                    <path fill="none" stroke="#717478" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M216 56H40M104 104v64M152 104v64M200 56v152a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56M168 56V40a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16"></path>
                                </svg>
                                <span>Remove</span>
                            </button>
                            
                            <button className='action_button buy_button' onClick={() => handleBuyNow(item.id)}>
                                <svg width="16" height="16" viewBox="0 0 256 256">
                                    <path fill="none" d="M0 0h256v256H0z"></path>
                                    <path fill="none" stroke="#717478" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="m96 240 16-80-64-24L160 16l-16 80 64 24L96 240z"></path>
                                </svg>
                                <span>Buy this now</span>
                            </button>
                        </div>
                    </div>
                ))}

                {/* Extended Warranty Banner */}
                <div className='extended_warranty_banner'>
                    <div className='warranty_content'>
                        <h4>Extended Warranty Plan by OneAssist</h4>
                        <p>Extended Warranty for 1 Year</p>
                        <span className='warranty_price'>₹69</span>
                    </div>
                    <button 
                        className={`add_warranty_btn ${extendedWarranty ? 'added' : ''}`}
                        onClick={() => setExtendedWarranty(!extendedWarranty)}
                    >
                        {extendedWarranty ? 'Added' : 'Add'}
                    </button>
                    <button className='close_warranty'>×</button>
                </div>

                {/* Offer Banner */}
                <div className='offer_banner'>
                    <div className='offer_content'>
                        <span>Add 1 more item to get Extra ₹40 off</span>
                    </div>
                    <button className='add_offer_btn'>Add</button>
                </div>
            </div>

            {/* Price Details */}
            <div className='price_details_section'>
                <div 
                    className='price_details_header'
                    onClick={() => setShowPriceDetails(!showPriceDetails)}
                >
                    <span>Price Details</span>
                    <span className={`arrow ${showPriceDetails ? 'up' : 'down'}`}>▼</span>
                </div>
                
                {showPriceDetails && (
                    <div className='price_breakdown'>
                        <div className='price_row'>
                            <span>Price ({cartItems.length} items)</span>
                            <span>₹{totals.itemsTotal}</span>
                        </div>
                        <div className='price_row discount'>
                            <span>Discount</span>
                            <span>-₹{totals.discount}</span>
                        </div>
                        <div className='price_row discount'>
                            <span>Coupons for you</span>
                            <span>-₹{totals.couponDiscount}</span>
                        </div>
                        {totals.protectPromiseTotal > 0 && (
                            <div className='price_row'>
                                <span>Protect Promise Fee</span>
                                <span>₹{totals.protectPromiseTotal}</span>
                            </div>
                        )}
                        {totals.warrantyFee > 0 && (
                            <div className='price_row'>
                                <span>Extended Warranty</span>
                                <span>₹{totals.warrantyFee}</span>
                            </div>
                        )}
                        <div className='price_row total'>
                            <span>Total Amount</span>
                            <span>₹{totals.total}</span>
                        </div>
                        <div className='savings_banner'>
                            You'll save ₹{totals.discount + totals.couponDiscount} on this order!
                        </div>
                    </div>
                )}
            </div>

            {/* More Offers */}
            <div className='more_offers'>
                <div 
                    className='more_offers_header'
                    onClick={() => setShowMoreOffers(!showMoreOffers)}
                >
                    <span>More Offers</span>
                    <span className={`arrow ${showMoreOffers ? 'up' : 'down'}`}>▼</span>
                </div>
                
                {showMoreOffers && (
                    <div className='offers_content'>
                        <div className='offer_item'>
                            <div className='offer_content'>
                                <span>Add 1 more item(s) to get extra ₹40 off</span>
                            </div>
                            <button className='add_btn'>ADD</button>
                        </div>
                        <div className='offer_item'>
                            <div className='offer_content'>
                                <span>Add 1 more item(s) to get extra ₹30 off</span>
                                <a href="#" className='view_details'>View Details</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Trust Banner */}
            <div className='trust_banner'>
                <div className='shield_icon'>🛡️</div>
                <span>Safe and secure payments. Easy returns. 100% Authentic products.</span>
            </div>

            {/* Bottom Fixed Bar */}
            <div className='bottom_bar'>
                <div className='total_amount'>
                    <span className='original_total'>₹{totals.itemsTotal}</span>
                    <span className='final_total'>₹{totals.total}</span>
                </div>
                <button className='place_order_btn' onClick={handlePlaceOrder}>
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default Cart
