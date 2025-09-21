import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './CheckoutPayment.css'
import go_back_arrow from '/images/goback_arrow_black.svg'
import upiIcon from '/images/Payment methods.svg'
import cardIcon from '/images/Payment methods.svg'
import emiIcon from '/images/Payment methods.svg'
import netbankingIcon from '/images/Payment methods.svg'
import giftIcon from '/images/giftCard-bd87e1.svg'
import codIcon from '/images/no_cash_on_delivery.svg'
import secureIcon from '/images/buyproduct_f-assure.svg'

function CheckoutPayment() {
    const navigate = useNavigate()
    const location = useLocation()
    
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('upi')
    const [upiId, setUpiId] = useState('')
    const [showUpiSection, setShowUpiSection] = useState(true)
    const [showCardSection, setShowCardSection] = useState(false)
    const [showEmiSection, setShowEmiSection] = useState(false)
    const [showNetbankingSection, setShowNetbankingSection] = useState(false)
    const [orderData, setOrderData] = useState(null)

    useEffect(() => {
        // Get order data from navigation state
        if (location.state) {
            setOrderData(location.state)
        } else {
            // If no data, redirect back to cart
            navigate('/cart')
        }
    }, [location.state, navigate])

    const paymentMethods = [
        {
            id: 'upi',
            name: 'UPI',
            icon: upiIcon,
            description: 'Add new UPI ID',
            expanded: showUpiSection,
            toggle: () => setShowUpiSection(!showUpiSection)
        },
        {
            id: 'card',
            name: 'Credit / Debit / ATM Card',
            icon: cardIcon,
            description: 'Add and secure cards as per RBI guidelines',
            expanded: showCardSection,
            toggle: () => setShowCardSection(!showCardSection),
            offers: 'Get upto 5% cashback*',
            offerCount: '2 offers available'
        },
        {
            id: 'emi',
            name: 'EMI',
            icon: emiIcon,
            description: 'Credit Card EMI',
            expanded: showEmiSection,
            toggle: () => setShowEmiSection(!showEmiSection)
        },
        {
            id: 'netbanking',
            name: 'Net Banking',
            icon: netbankingIcon,
            description: 'Net Banking',
            expanded: showNetbankingSection,
            toggle: () => setShowNetbankingSection(!showNetbankingSection)
        }
    ]

    const handlePaymentMethodSelect = (methodId) => {
        setSelectedPaymentMethod(methodId)
        
        // Close all sections first
        setShowUpiSection(false)
        setShowCardSection(false)
        setShowEmiSection(false)
        setShowNetbankingSection(false)
        
        // Open selected section
        switch(methodId) {
            case 'upi':
                setShowUpiSection(true)
                break
            case 'card':
                setShowCardSection(true)
                break
            case 'emi':
                setShowEmiSection(true)
                break
            case 'netbanking':
                setShowNetbankingSection(true)
                break
            default:
                break
        }
    }

    const handleUpiIdChange = (e) => {
        setUpiId(e.target.value)
    }

    const handleVerifyUpi = () => {
        if (upiId && upiId.includes('@')) {
            // In a real app, you would verify the UPI ID
            console.log('Verifying UPI ID:', upiId)
        }
    }

    const handlePayment = () => {
        if (selectedPaymentMethod === 'upi' && !upiId) {
            alert('Please enter your UPI ID')
            return
        }
        
        // In a real app, you would process the payment
        console.log('Processing payment:', {
            method: selectedPaymentMethod,
            upiId: selectedPaymentMethod === 'upi' ? upiId : null,
            amount: orderData?.totals?.total || 0
        })
        
        // Navigate to order confirmation
        navigate('/order-confirmation', { 
            state: { 
                orderData,
                paymentMethod: selectedPaymentMethod,
                upiId: selectedPaymentMethod === 'upi' ? upiId : null
            } 
        })
    }

    const handleGiftCard = () => {
        // Handle gift card addition
        console.log('Add gift card')
    }

    if (!orderData) {
        return <div>Loading...</div>
    }

    return (
        <div className='checkout_payment_main'>
            {/* Header */}
            <div className='payment_header'>
                <button onClick={() => navigate(-1)} className='back_btn'>
                    <img src={go_back_arrow} alt="Back" />
                </button>
                <div className='header_content'>
                    <span className='step_indicator'>Step 3 of 3</span>
                    <h1 className='page_title'>Payments</h1>
                </div>
                <div className='secure_badge'>
                    <img src={secureIcon} alt="Secure" />
                    <span>100% Secure</span>
                </div>
            </div>

            {/* Total Amount */}
            <div className='total_amount_section'>
                <div className='total_amount_header'>
                    <span>Total Amount</span>
                    <span className='amount'>₹{orderData.totals?.total || 0}</span>
                </div>
            </div>

            {/* Payment Offers */}
            <div className='payment_offers'>
                <div className='offer_banner'>
                    <span>10% instant discount</span>
                    <span className='claim_text'>Claim now with payment offers</span>
                </div>
                <div className='offer_icons'>
                    <div className='offer_icon'>🏷️</div>
                    <div className='offer_icon'>🏦</div>
                    <div className='offer_icon'>+3</div>
                </div>
            </div>

            {/* Payment Methods */}
            <div className='payment_methods'>
                {paymentMethods.map((method) => (
                    <div key={method.id} className='payment_method_section'>
                        <div 
                            className={`payment_method_header ${selectedPaymentMethod === method.id ? 'selected' : ''}`}
                            onClick={() => handlePaymentMethodSelect(method.id)}
                        >
                            <div className='method_info'>
                                <img src={method.icon} alt={method.name} className='method_icon' />
                                <div className='method_details'>
                                    <span className='method_name'>{method.name}</span>
                                    <span className='method_description'>{method.description}</span>
                                    {method.offers && (
                                        <span className='method_offers'>{method.offers}</span>
                                    )}
                                    {method.offerCount && (
                                        <span className='offer_count'>{method.offerCount}</span>
                                    )}
                                </div>
                            </div>
                            <div className={`expand_arrow ${method.expanded ? 'expanded' : ''}`}>
                                ▼
                            </div>
                        </div>

                        {/* UPI Section */}
                        {method.id === 'upi' && method.expanded && (
                            <div className='payment_details_section'>
                                <div className='upi_section'>
                                    <div className='upi_input_group'>
                                        <label>UPI ID</label>
                                        <input
                                            type='text'
                                            placeholder='Enter your UPI ID'
                                            value={upiId}
                                            onChange={handleUpiIdChange}
                                            className='upi_input'
                                        />
                                    </div>
                                    <div className='upi_actions'>
                                        <button className='how_to_find_btn'>How to find?</button>
                                        <button 
                                            className='verify_btn'
                                            onClick={handleVerifyUpi}
                                        >
                                            Verify
                                        </button>
                                    </div>
                                </div>
                                <button 
                                    className='pay_button'
                                    onClick={handlePayment}
                                >
                                    Pay ₹{orderData.totals?.total || 0}
                                </button>
                            </div>
                        )}

                        {/* Card Section */}
                        {method.id === 'card' && method.expanded && (
                            <div className='payment_details_section'>
                                <div className='card_section'>
                                    <p>Card payment form would go here</p>
                                    <button 
                                        className='pay_button'
                                        onClick={handlePayment}
                                    >
                                        Pay ₹{orderData.totals?.total || 0}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* EMI Section */}
                        {method.id === 'emi' && method.expanded && (
                            <div className='payment_details_section'>
                                <div className='emi_section'>
                                    <p>EMI options would go here</p>
                                    <button 
                                        className='pay_button'
                                        onClick={handlePayment}
                                    >
                                        Pay ₹{orderData.totals?.total || 0}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Net Banking Section */}
                        {method.id === 'netbanking' && method.expanded && (
                            <div className='payment_details_section'>
                                <div className='netbanking_section'>
                                    <p>Net banking options would go here</p>
                                    <button 
                                        className='pay_button'
                                        onClick={handlePayment}
                                    >
                                        Pay ₹{orderData.totals?.total || 0}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Gift Card */}
                <div className='gift_card_section'>
                    <div className='gift_card_header'>
                        <img src={giftIcon} alt="Gift" className='gift_icon' />
                        <span>Have a Flipkart Gift Card?</span>
                        <button className='add_gift_card_btn' onClick={handleGiftCard}>
                            Add
                        </button>
                    </div>
                </div>

                {/* Cash on Delivery */}
                <div className='cod_section'>
                    <div className='cod_header'>
                        <img src={codIcon} alt="COD" className='cod_icon' />
                        <span>Cash on Delivery</span>
                        <span className='unavailable_badge'>Unavailable</span>
                    </div>
                </div>
            </div>

            {/* Customer Message */}
            <div className='customer_message'>
                <div className='message_text'>
                    35 Crore happy customers and counting!
                </div>
                <div className='smiley_icon'>😊</div>
            </div>
        </div>
    )
}

export default CheckoutPayment
