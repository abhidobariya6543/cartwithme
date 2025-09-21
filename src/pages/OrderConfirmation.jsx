import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './OrderConfirmation.css'
import homeIcon from '/images/home.jpg'
import orderIcon from '/images/orders-bfe8c4.svg'

function OrderConfirmation() {
    const navigate = useNavigate()
    const location = useLocation()
    
    const orderData = location.state?.orderData
    const paymentMethod = location.state?.paymentMethod
    const upiId = location.state?.upiId

    const orderId = `ORD${Date.now()}`

    const handleContinueShopping = () => {
        navigate('/')
    }

    const handleViewOrders = () => {
        navigate('/orders')
    }

    return (
        <div className='order_confirmation_main'>
            <div className='confirmation_container'>
                {/* Success Icon */}
                <div className='success_icon'>
                    ✓
                </div>

                {/* Order Confirmed */}
                <h1 className='confirmation_title'>Order Confirmed!</h1>
                <p className='confirmation_subtitle'>
                    Your order has been placed successfully
                </p>

                {/* Order Details */}
                <div className='order_details_card'>
                    <div className='order_id'>
                        <span className='label'>Order ID:</span>
                        <span className='value'>{orderId}</span>
                    </div>
                    
                    <div className='order_amount'>
                        <span className='label'>Total Amount:</span>
                        <span className='value'>₹{orderData?.totals?.total || 0}</span>
                    </div>
                    
                    <div className='payment_method'>
                        <span className='label'>Payment Method:</span>
                        <span className='value'>
                            {paymentMethod === 'upi' ? `UPI (${upiId})` : 
                             paymentMethod === 'card' ? 'Credit/Debit Card' :
                             paymentMethod === 'emi' ? 'EMI' :
                             paymentMethod === 'netbanking' ? 'Net Banking' :
                             'Cash on Delivery'}
                        </span>
                    </div>
                    
                    <div className='delivery_address'>
                        <span className='label'>Delivery Address:</span>
                        <span className='value'>{orderData?.deliveryAddress?.address || 'N/A'}</span>
                    </div>
                </div>

                {/* Delivery Timeline */}
                <div className='delivery_timeline'>
                    <h3>Expected Delivery</h3>
                    <div className='timeline_item'>
                        <div className='timeline_dot'></div>
                        <div className='timeline_content'>
                            <span className='timeline_date'>Today</span>
                            <span className='timeline_text'>Order Confirmed</span>
                        </div>
                    </div>
                    <div className='timeline_item'>
                        <div className='timeline_dot'></div>
                        <div className='timeline_content'>
                            <span className='timeline_date'>Tomorrow</span>
                            <span className='timeline_text'>Order Packed</span>
                        </div>
                    </div>
                    <div className='timeline_item'>
                        <div className='timeline_dot'></div>
                        <div className='timeline_content'>
                            <span className='timeline_date'>Day After</span>
                            <span className='timeline_text'>Out for Delivery</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className='action_buttons'>
                    <button 
                        className='continue_shopping_btn'
                        onClick={handleContinueShopping}
                    >
                        <img src={homeIcon} alt="Home" />
                        Continue Shopping
                    </button>
                    
                    <button 
                        className='view_orders_btn'
                        onClick={handleViewOrders}
                    >
                        <img src={orderIcon} alt="Orders" />
                        View Orders
                    </button>
                </div>

                {/* Additional Info */}
                <div className='additional_info'>
                    <p>You will receive an email confirmation shortly.</p>
                    <p>Track your order in the "My Orders" section.</p>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation
