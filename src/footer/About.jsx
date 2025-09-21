import React from 'react'
import './about.css'
import instagram from '/images/Instagram.svg'
import facebook from '/images/Facebook.svg'
import twitter from '/images/Twitter.svg'
import youtube from '/images/YouTube.svg'
import paymentMethod from '/images/Payment methods.svg'
import becomeSeller from '/images/Become a Seller-1.svg'
import advertise from '/images/Advertise-1.svg'
import giftCard from '/images/Gift Cards-1.svg'
import helpCenter from '/images/Help Center.svg'
function About() {
  return (
    <div className='about_main' >
        <div className='about_hddiv' >
            <div className='about_content' >
                <div className='content_heading' >ABOUT</div>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>About Us</p>
                <p>Flipkart Stories</p>
                <p>Press</p>
                <p>Corporate Information</p>
            </div>
            <div className='about_content' >
                <div className='content_heading' >GROUP COMPANIES</div>
                <p>Myntra</p>
                <p>Cleartrip</p>
                <p>Shopsy</p>
            </div>
            <div className='about_content' >
                <div className='content_heading' >HELP</div>
                <p>Payments</p>
                <p>Shipping</p>
                <p>Cancellation & Returns</p>
                <p>FAQ</p>
            </div>
            <div className='about_content about_margin' >
                    
                <div className='content_heading' >
                    CONSUMER POLICY
                </div>
                <p>Cancellation & Returns</p>
                <p>Terms Of Use</p>
                <p>Security</p>
                <p>Privacy</p>
                <p>Sitemap</p>
                <p>Grievance Redressal</p>
                <p>EPR Compliance</p>
            </div>
            <div className='about_content about_margin' >
                <div className='content_heading' >Mail Us:</div>
                <div className='mail_content'>
                    <p>Flipkart Internet Private Limited, </p>
                    <p> Buildings Alyssa, Begonia & </p>
                    <p> Clove Embassy Tech Village, </p>
                    <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                    <p> Bengaluru, 560103, </p>
                    <p> Karnataka, India</p>
                </div>
                <div className='social content_heading' >Social:</div>
                <div className='social_symbol' >
                    <div className='social_logo' ><a href=""><img src={facebook} alt="" /></a></div>
                    <div className='social_logo' ><a href=""><img src={twitter} alt="" /></a></div>
                    <div className='social_logo' ><a href=""><img src={youtube} alt="" /></a></div>
                    <div className='social_logo instagram' ><a href=""><img src={instagram} alt="" /></a></div>
                </div>
            </div>
            <div className='about_content about_margin' >
                <div className='content_heading' >Registered Office Address:</div>
                <p>Flipkart Internet Private Limited, </p>
                <p> Buildings Alyssa, Begonia & </p>
                <p> Clove Embassy Tech Village, </p>
                <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                <p> Bengaluru, 560103, </p>
                <p> Karnataka, India </p>
                <p> CIN : U51109KA2012PTC066107 </p>
                <p>
                     Telephone: 
                    <a href="">044-45614700</a> /
                    <a href="">044-67415800</a>    
                </p>
            </div>
        </div>
        <div className='copyrights' >
            <div className='become_seller center' >
                <img src={becomeSeller} alt="" />
                <span>Become a Seller</span>
            </div>
            <div className='advertise center' >
                <img src={advertise} alt="" />
                <span>Advertise</span>
            </div>
            <div className='gift_card center' >
                <img src={giftCard} alt="" />
                <span>Gift Cards</span>
            </div>
            <div className='help_center center' >
                <img src={helpCenter} alt="" />
                <span>Help Center</span>
            </div>
            <span className='copyrights_text'>© 2007-2025 Flipkart.com</span>
            <img src={paymentMethod} alt="" />
        </div>
    </div>
  )
}

export default About