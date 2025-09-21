import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './CheckoutSummary.css'
import go_back_arrow from '/images/goback_arrow_black.svg'
import star from '/images/green_star.svg'
import protectPromise from '/images/buyproduct_f-assure.svg'
import emailIcon from '/images/profile-52e0dc.svg'
import gstIcon from '/images/price_info.svg'
import openBoxIcon from '/images/wowdeal.svg'

function CheckoutSummary() {
    const navigate = useNavigate()
    const location = useLocation()
    
    const [orderItems, setOrderItems] = useState([
        {
            id: 1,
            name: "ProV Natural Seedless Black Raisins",
            variant: "1 x 250 g",
            image: "/images/dry_fruits.jpg",
            rating: 4.2,
            reviews: "763",
            originalPrice: 249,
            currentPrice: 224,
            discount: 10,
            wowPrice: 212,
            deliveryDate: "Sep 26, Fri",
            quantity: 1,
            assured: true,
            outOfStock: true,
            pincode: "395006"
        },
        {
            id: 2,
            name: "Noise Twist Go 1.39\" Display, Bluetooth...",
            variant: "Jet Black Strap, Regular",
            image: "/images/mobile.jpg",
            rating: 4.2,
            reviews: "1,64,423",
            originalPrice: 4999,
            currentPrice: 1399,
            discount: 72,
            wowPrice: 1329,
            deliveryDate: "Sep 26, Fri",
            quantity: 1,
            assured: true,
            protectPromiseFee: 19,
            outOfStock: false
        },
        {
            id: 3,
            name: "Tulsi California Rozana Almonds",
            variant: "1 x 1 kg",
            image: "/images/dry_fruits.jpg",
            rating: 4.2,
            reviews: "20,488",
            originalPrice: 6274,
            currentPrice: 2200,
            discount: 65,
            wowPrice: 735,
            deliveryDate: "Sep 25, Thu",
            quantity: 1,
            assured: true,
            outOfStock: false
        }
    ])

    const [deliveryAddress, setDeliveryAddress] = useState({
        name: "Abhi",
        address: "80, swaminarayna nagar, sarathana jakatnaka, Surat 395006",
        phone: "7984262588"
    })

    const [email, setEmail] = useState('')
    const [showEmailInput, setShowEmailInput] = useState(false)
    const [gstInvoice, setGstInvoice] = useState(false)
    const [openBoxDelivery, setOpenBoxDelivery] = useState(true)

    useEffect(() => {
        // Get address from navigation state if coming from address page
        if (location.state?.address) {
            const address = location.state.address
            setDeliveryAddress({
                name: address.fullName,
                address: `${address.houseNumber}, ${address.roadName}, ${address.city} ${address.pincode}`,
                phone: address.phoneNumber
            })
        }
    }, [location.state])

    const availableItems = orderItems.filter(item => !item.outOfStock)
    const outOfStockItems = orderItems.filter(item => item.outOfStock)

    const calculateTotal = () => {
        const itemsTotal = availableItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0)
        const protectPromiseTotal = availableItems.reduce((sum, item) => sum + (item.protectPromiseFee || 0), 0)
        const discount = availableItems.reduce((sum, item) => sum + ((item.originalPrice - item.currentPrice) * item.quantity), 0)
        const couponDiscount = 150
        
        return {
            itemsTotal,
            protectPromiseTotal,
            discount,
            couponDiscount,
            total: itemsTotal - discount - couponDiscount + protectPromiseTotal
        }
    }

    const totals = calculateTotal()

    const handleQuantityChange = (id, newQuantity) => {
        setOrderItems(items => 
            items.map(item => 
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    const handleChangeAddress = () => {
        navigate('/checkout/address')
    }

    const handleAddEmail = () => {
        setShowEmailInput(true)
    }

    const handleEmailSubmit = () => {
        if (email && email.includes('@')) {
            setShowEmailInput(false)
        }
    }

    const handleContinue = () => {
        navigate('/checkout/payment', { 
            state: { 
                orderItems: availableItems,
                deliveryAddress,
                email,
                totals
            } 
        })
    }

    return (
        <div className='checkout_summary_main'>
            {/* Header */}
            <div className='summary_header'>
                <button onClick={() => navigate(-1)} className='back_btn'>
                    <img src={go_back_arrow} alt="Back" />
                </button>
                <h1 className='page_title'>Order Summary</h1>
            </div>

            {/* Progress Indicator */}
            <div className='progress_indicator'>
                <div className='progress_step completed'>
                    <div className='step_number'>✓</div>
                    <span>Address</span>
                </div>
                <div className='progress_line completed'></div>
                <div className='progress_step active'>
                    <div className='step_number'>2</div>
                    <span>Order Summary</span>
                </div>
                <div className='progress_line'></div>
                <div className='progress_step'>
                    <div className='step_number'>3</div>
                    <span>Payment</span>
                </div>
            </div>

            {/* Out of Stock Alert */}
            {outOfStockItems.length > 0 && (
                <div className='out_of_stock_alert'>
                    {outOfStockItems.length} item{outOfStockItems.length > 1 ? 's' : ''} {outOfStockItems.length > 1 ? 'are' : 'is'} not deliverable to {deliveryAddress.address.split(' ').pop()}. Please try changing the address.
                </div>
            )}

            {/* Delivery Information */}
            <div className='delivery_section'>
                <div className='section_header'>
                    <h3>Deliver to:</h3>
                    <button className='change_address_btn' onClick={handleChangeAddress}>
                    <span className='btn_text'>Change Address</span>
                </button>
                </div>
                <div className='delivery_address'>
                    <div className='recipient_name'>{deliveryAddress.name}</div>
                    <div className='address_text'>{deliveryAddress.address}</div>
                    <div className='phone_number'>{deliveryAddress.phone}</div>
                </div>
            </div>

            {/* Order Items */}
            <div className='order_items_section'>
                {orderItems.map((item) => (
                    <div key={item.id} className={`order_item ${item.outOfStock ? 'out_of_stock' : ''}`}>
                        <div className='item_image'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        
                        <div className='item_details'>
                            <h3 className='item_name'>{item.name}</h3>
                            <p className='item_variant'>{item.variant}</p>
                            
                            <div className='item_rating'>
                                <span className='rating'>{item.rating}</span>
                                <img src={star} alt="Star" className='star_icon' />
                                <span className='reviews'>({item.reviews})</span>
                                {item.assured && <span className='assured_badge'>Assured</span>}
                            </div>

                            {!item.outOfStock && (
                                <div className='quantity_selector'>
                                    <span>Qty: </span>
                                    <select 
                                        value={item.quantity} 
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    >
                                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className='item_pricing'>
                                <div className='discount_badge'>{item.discount}% off</div>
                                <div className='price_row'>
                                    <span className='original_price'>₹{item.originalPrice}</span>
                                    <span className='current_price'>₹{item.currentPrice}</span>
                                    <span className='wow_price'>Or Pay ₹{item.wowPrice} + 70</span>
                                </div>
                                {item.protectPromiseFee && (
                                    <div className='protect_promise'>
                                        + ₹{item.protectPromiseFee} Protect Promise Fee
                                    </div>
                                )}
                            </div>

                            {item.outOfStock ? (
                                <div className='out_of_stock_message'>
                                    Currently out of stock for {item.pincode}
                                </div>
                            ) : (
                                <div className='delivery_info'>
                                    Delivery by {item.deliveryDate}
                                </div>
                            )}

                            {!item.outOfStock && item.id === orderItems[orderItems.length - 1].id && (
                                <button className='continue_btn' onClick={handleContinue}>
                                    Continue
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Information */}
            <div className='additional_info_section'>
                {/* Email ID */}
                <div className='info_item'>
                    <img src={emailIcon} alt="Email" className='info_icon' />
                    <div className='info_content'>
                        <span>Email ID required for delivery</span>
                        {!email && !showEmailInput && (
                            <button className='add_email_btn' onClick={handleAddEmail}>
                                Add Email
                            </button>
                        )}
                        {showEmailInput && (
                            <div className='email_input_section'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='email_input'
                                />
                                <button className='submit_email_btn' onClick={handleEmailSubmit}>
                                    Submit
                                </button>
                            </div>
                        )}
                        {email && !showEmailInput && (
                            <span className='email_display'>{email}</span>
                        )}
                    </div>
                </div>

                {/* GST Invoice */}
                <div className='info_item'>
                    <img src={gstIcon} alt="GST" className='info_icon' />
                    <div className='info_content'>
                        <div className='gst_checkbox'>
                            <input
                                type='checkbox'
                                id='gst_invoice'
                                checked={gstInvoice}
                                onChange={(e) => setGstInvoice(e.target.checked)}
                            />
                            <label htmlFor='gst_invoice'>GST Invoice not available</label>
                        </div>
                        <span className='gst_note'>Some items are not eligible for GST invoice</span>
                    </div>
                </div>

                {/* Open Box Delivery */}
                <div className='info_item'>
                    <img src={openBoxIcon} alt="Open Box" className='info_icon' />
                    <div className='info_content'>
                        <div className='open_box_header'>
                            <span>Rest assured with Open Box Delivery</span>
                        </div>
                        <p className='open_box_description'>
                            Delivery agent will open the package so you can check for correct product, damage or missing items. Share OTP to accept the delivery.
                        </p>
                        <button className='why_btn'>Why?</button>
                    </div>
                </div>
            </div>

            {/* Price Details */}
            <div className='price_details_section'>
                <h3>Price Details</h3>
                <div className='price_breakdown'>
                    <div className='price_row'>
                        <span>Price ({availableItems.length} items)</span>
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
                    <div className='price_row total'>
                        <span>Total Amount</span>
                        <span>₹{totals.total}</span>
                    </div>
                    <div className='savings_banner'>
                        You'll save ₹{totals.discount + totals.couponDiscount} on this order!
                    </div>
                </div>
            </div>

            {/* Legal Disclaimer */}
            <div className='legal_disclaimer'>
                By continuing with the order, you confirm that you are above 18 years of age, and you agree to the Flipkart's Terms of Use and Privacy Policy
            </div>

            {/* Bottom Action Bar */}
            <div className='bottom_action_bar'>
                <div className='total_amount'>
                    <span>₹{totals.total}</span>
                </div>
                <button 
                    className='continue_order_btn'
                    onClick={handleContinue}
                    disabled={availableItems.length === 0}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default CheckoutSummary
