import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CheckoutAddress.css'
import go_back_arrow from '/images/goback_arrow_black.svg'
import locationIcon from '/images/location-logo.svg'
import homeIcon from '/images/home.jpg'
import workIcon from '/images/more_logo.svg'

function CheckoutAddress() {
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '7984262588',
        alternatePhone: '',
        pincode: '',
        state: '',
        city: '',
        houseNumber: '',
        roadName: '',
        landmark: '',
        addressType: 'home'
    })

    const [errors, setErrors] = useState({})
    const [showLocationPermission, setShowLocationPermission] = useState(true)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleAddressTypeChange = (type) => {
        setFormData(prev => ({
            ...prev,
            addressType: type
        }))
    }

    const handleUseMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // In a real app, you would reverse geocode the coordinates
                    console.log('Location:', position.coords)
                    // For demo purposes, we'll just fill some sample data
                    setFormData(prev => ({
                        ...prev,
                        pincode: '395006',
                        state: 'Gujarat',
                        city: 'Surat'
                    }))
                    setShowLocationPermission(false)
                },
                (error) => {
                    console.error('Error getting location:', error)
                    setShowLocationPermission(true)
                }
            )
        } else {
            console.log('Geolocation not supported')
        }
    }

    const validateForm = () => {
        const newErrors = {}
        
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required'
        }
        
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required'
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Please enter a valid 10-digit phone number'
        }
        
        if (!formData.pincode.trim()) {
            newErrors.pincode = 'Pincode is required'
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = 'Please enter a valid 6-digit pincode'
        }
        
        if (!formData.state.trim()) {
            newErrors.state = 'State is required'
        }
        
        if (!formData.city.trim()) {
            newErrors.city = 'City is required'
        }
        
        if (!formData.houseNumber.trim()) {
            newErrors.houseNumber = 'House number is required'
        }
        
        if (!formData.roadName.trim()) {
            newErrors.roadName = 'Road name is required'
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSaveAddress = () => {
        if (validateForm()) {
            // Save address and navigate to order summary
            navigate('/checkout/summary', { 
                state: { 
                    address: formData,
                    fromAddress: true 
                } 
            })
        }
    }

    const handleAddAlternatePhone = () => {
        // Toggle alternate phone field
        if (formData.alternatePhone) {
            setFormData(prev => ({ ...prev, alternatePhone: '' }))
        } else {
            // Show input field for alternate phone
            const phone = prompt('Enter alternate phone number:')
            if (phone) {
                setFormData(prev => ({ ...prev, alternatePhone: phone }))
            }
        }
    }

    return (
        <div className='checkout_address_main'>
            {/* Header */}
            <div className='address_header'>
                <button onClick={() => navigate(-1)} className='back_btn'>
                    <img src={go_back_arrow} alt="Back" />
                </button>
                <h1 className='page_title'>Add delivery address</h1>
            </div>

            {/* Progress Indicator */}
            <div className='progress_indicator'>
                <div className='progress_step active'>
                    <div className='step_number'>1</div>
                    <span>Address</span>
                </div>
                <div className='progress_line'></div>
                <div className='progress_step'>
                    <div className='step_number'>2</div>
                    <span>Order Summary</span>
                </div>
                <div className='progress_line'></div>
                <div className='progress_step'>
                    <div className='step_number'>3</div>
                    <span>Payment</span>
                </div>
            </div>

            {/* Form */}
            <div className='address_form'>
                <div className='form_group'>
                    <label htmlFor='fullName'>Full Name *</label>
                    <input
                        type='text'
                        id='fullName'
                        name='fullName'
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder='Enter your full name'
                        className={errors.fullName ? 'error' : ''}
                    />
                    {errors.fullName && <span className='error_message'>{errors.fullName}</span>}
                </div>

                <div className='form_group'>
                    <label htmlFor='phoneNumber'>Phone number *</label>
                    <input
                        type='tel'
                        id='phoneNumber'
                        name='phoneNumber'
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder='Enter your phone number'
                        className={errors.phoneNumber ? 'error' : ''}
                    />
                    <button 
                        type='button' 
                        className='add_alternate_btn'
                        onClick={handleAddAlternatePhone}
                    >
                        + Add Alternate Phone Number
                    </button>
                    {errors.phoneNumber && <span className='error_message'>{errors.phoneNumber}</span>}
                </div>

                {formData.alternatePhone && (
                    <div className='form_group'>
                        <label htmlFor='alternatePhone'>Alternate Phone Number</label>
                        <input
                            type='tel'
                            id='alternatePhone'
                            name='alternatePhone'
                            value={formData.alternatePhone}
                            onChange={handleInputChange}
                            placeholder='Enter alternate phone number'
                        />
                    </div>
                )}

                {showLocationPermission && (
                    <div className='location_permission_warning'>
                        Please provide location permission to Flipkart app.
                    </div>
                )}

                <div className='form_group'>
                    <label htmlFor='pincode'>Pincode *</label>
                    <input
                        type='text'
                        id='pincode'
                        name='pincode'
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder='Enter pincode'
                        className={errors.pincode ? 'error' : ''}
                    />
                    {errors.pincode && <span className='error_message'>{errors.pincode}</span>}
                </div>

                <button 
                    type='button' 
                    className='use_location_btn'
                    onClick={handleUseMyLocation}
                >
                    <img src={locationIcon} alt="Location" />
                    Use my location
                </button>

                <div className='form_group'>
                    <label htmlFor='state'>State *</label>
                    <input
                        type='text'
                        id='state'
                        name='state'
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder='Enter state'
                        className={errors.state ? 'error' : ''}
                    />
                    {errors.state && <span className='error_message'>{errors.state}</span>}
                </div>

                <div className='form_group'>
                    <label htmlFor='city'>City *</label>
                    <div className='input_with_icon'>
                        <input
                            type='text'
                            id='city'
                            name='city'
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder='Enter city'
                            className={errors.city ? 'error' : ''}
                        />
                        <span className='search_icon'>🔍</span>
                    </div>
                    {errors.city && <span className='error_message'>{errors.city}</span>}
                </div>

                <div className='form_group'>
                    <label htmlFor='houseNumber'>House No., Building Name *</label>
                    <input
                        type='text'
                        id='houseNumber'
                        name='houseNumber'
                        value={formData.houseNumber}
                        onChange={handleInputChange}
                        placeholder='Enter house number and building name'
                        className={errors.houseNumber ? 'error' : ''}
                    />
                    {errors.houseNumber && <span className='error_message'>{errors.houseNumber}</span>}
                </div>

                <div className='form_group'>
                    <label htmlFor='roadName'>Road name, Area, Colony *</label>
                    <div className='input_with_icon'>
                        <input
                            type='text'
                            id='roadName'
                            name='roadName'
                            value={formData.roadName}
                            onChange={handleInputChange}
                            placeholder='Enter road name, area, colony'
                            className={errors.roadName ? 'error' : ''}
                        />
                        <span className='search_icon'>🔍</span>
                    </div>
                    {errors.roadName && <span className='error_message'>{errors.roadName}</span>}
                </div>

                <button 
                    type='button' 
                    className='add_landmark_btn'
                >
                    Add Nearby Famous Shop/Mall/Landmark
                </button>

                {formData.landmark && (
                    <div className='form_group'>
                        <label htmlFor='landmark'>Landmark</label>
                        <input
                            type='text'
                            id='landmark'
                            name='landmark'
                            value={formData.landmark}
                            onChange={handleInputChange}
                            placeholder='Enter landmark'
                        />
                    </div>
                )}

                {/* Address Type */}
                <div className='address_type_section'>
                    <h3>Type of address</h3>
                    <div className='address_type_options'>
                        <button
                            type='button'
                            className={`address_type_btn ${formData.addressType === 'home' ? 'active' : ''}`}
                            onClick={() => handleAddressTypeChange('home')}
                        >
                            <img src={homeIcon} alt="Home" />
                            <span>Home</span>
                        </button>
                        <button
                            type='button'
                            className={`address_type_btn ${formData.addressType === 'work' ? 'active' : ''}`}
                            onClick={() => handleAddressTypeChange('work')}
                        >
                            <img src={workIcon} alt="Work" />
                            <span>Work</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className='save_address_section'>
                <button 
                    className='save_address_btn'
                    onClick={handleSaveAddress}
                >
                    Save Address
                </button>
            </div>
        </div>
    )
}

export default CheckoutAddress
