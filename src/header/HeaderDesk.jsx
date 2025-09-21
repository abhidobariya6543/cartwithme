import React, { useState } from 'react'
import './header.css'
import flipkart from '/images/Flipkart.svg'
import searchIcon from '/images/search-Icon-light.svg'
import arrowDown from '/images/Chevron.svg'
import loginLogo from '/images/Login.svg'
import cartLogo from '/images/Cart.svg'
import sellerLogo  from '/images/Become a Seller.svg'
import moreLogo from '/images/Dropdown with more help links.svg'
import ThreeDotMore from './ThreeDotMore'
import Login from './Login' 
import {loginData} from '../data/login.json'

function HeaderDesk() {
    const [search,setSearch]=useState('')
    const [openmore,setOpenMore]=useState(false)
    const [openlogin,setOpenLogin]=useState(false)
  return (
    <div className='header-div-desk'>
        <div className='header-sbdiv-desk'>
            <div className='header-child-div'>
                <header className='header-class'>
                    <div className='header-right'>
                        <div className='flipkart-div'>
                            <a href=""><img src={flipkart} alt="" /></a>
                        </div>
                        <div className='search-div'>
                            <form action="">
                                <div className='search-sub-div'>
                                    <button>
                                        <img src={searchIcon} alt="" />
                                    </button>
                                    <div className='search-input'>
                                        <input type='text' value={search} onChange={(e)=>{
                                            setSearch(e.target.value)
                                            }} placeholder='Search for Products, Brands and More'/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='header-left'>
                        <div className='login-hddiv'>
                            <div className='login-div' onMouseEnter={()=>setOpenLogin(true)} onMouseLeave={()=>setOpenLogin(false)} >
                                <a href="" className='login-link'>
                                    <img src={loginLogo} alt="" />
                                    <span className='login_txt' >Login</span>
                                </a>
                                <img src={arrowDown} alt="" className='arrow-down' />
                                {
                                    openlogin && <Login data={loginData} />
                                }
                            </div>
                        </div>
                        <div className='cart-hddiv'>
                            <div className='cart-div'>
                                <a href="" className='cart-img'>
                                    <img src={cartLogo} alt="" />
                                </a>
                                <a href="" className='cart'>Cart</a>
                            </div>
                        </div>
                        <div className='seller-hddiv'>
                            <div className='seller-div'>
                                <a href="" className='seller-img'>
                                    <img src={sellerLogo} alt="" />
                                </a>
                                <a href="" className='become-a-seller'>Become a Seller</a>
                            </div>
                        </div> 
                        <div className='threedot-hd' >
                            <div className='threedot-hddiv'>
                                <div className='threedot-div'onClick={()=>setOpenMore(true)} onMouseEnter={()=>setOpenMore(true)} onMouseLeave={()=>setOpenMore(false)} >
                                    <a  className='border-div'  ><img src={moreLogo} alt=""  /></a>
                                    {
                                        openmore && <ThreeDotMore/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    </div>
  )
}

export default HeaderDesk