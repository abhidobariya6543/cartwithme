import React, { useEffect, useState } from 'react'
import '../navbar/nav.css'
import supercoin from '/images/superCoin.webp'
import flixcart from '/images/flixcart.png'
import category from '/images/category.png'
import more_on from '/images/more-on.jpg'
import choose_language from '/images/choose_langauge.png'
import offer_zone from '/images/offer_zone.png'
import sell_on_flipkart from '/images/sell_on_filpkart.png'
import my_order from '/images/my_order.png'
import coupons from '/images/coupons.png'
import my_cart from '/images/my_cart.png'
import my_wishlist from '/images/my_wishlist.png'
import my_account from '/images/my_account.png'
import my_notification from '/images/my_notification.png'



function Nav({onclose}) {
    const [visible,setVisible]= useState(false)
    useEffect(()=>{
      setTimeout(()=>setVisible(true),10)
    },[])
    const handleClose=()=>{
      setVisible(false)
      setTimeout(()=>{
        onclose()
      },300)
    }
  return (
    <div className='drawer-overlay' onClick={handleClose}>
      <div className={`drawer ${visible? 'open': ''}`} onClick={e=>e.stopPropagation()}>
        <div className='drawer-container' style={{height:'690px'}}>
          <div className='login-table'>
                <table width={'100%'}>  
                  <tbody>
                    <tr className='table-row'>
                      <td className='table-img'>
                          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+CiAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNyAwYTMuNSAzLjUgMCAxIDEgMCA3IDMuNSAzLjUgMCAwIDEgMC03em0wIDguNzVjMy44NjcgMCA3IDEuNTY2IDcgMy41VjE0SDB2LTEuNzVjMC0xLjkzNCAzLjEzMi0zLjUgNy0zLjV6Ii8+Cjwvc3ZnPgo=" alt="" />
                          <div className='nav-login'>Login &amp; Signup</div>
                      </td>
                      <td className='filp-simple-logo' width={'40px'}>
                          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png" width={'20px'} alt="" />
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div'>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img'>
                            <img src={supercoin} alt="" width={'14px'} height={'14px'} />
                          </div>
                          <span>SuperCoin Zone</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div'>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={flixcart} alt="" width={'12px'} height={'14px'} />
                          </div>
                          <span>Flipkart Plus Zone</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div category'>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={category} alt="" width={'13px'} height={'14px'} />
                          </div>
                          <span>All Categories</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div more_on'>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={more_on} alt="" width={'14px'} height={'13.5px'} />
                          </div>
                          <span>More on Flipkart</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body '>
                <ul className='nav-unlist'>
                  <div className='nav-list-div language more_on'>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={choose_language} alt="" width={'14px'} height={'13.5px'} />
                          </div>
                          <span>Choose Language</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div '>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={offer_zone} alt="" width={'14px'} height={'9px'} />
                          </div>
                          <span>Offer Zone</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div '>
                    <li className='nav-list more_on'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={sell_on_flipkart} alt="" width={'14px'} height={'14px'} />
                          </div>
                          <span>Sell on Flipkart</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div '>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={my_order} alt="" width={'14px'} height={'11px'} />
                          </div>
                          <span>My Orders</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div '>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={coupons} alt="" width={'14px'} height={'14px'} />
                          </div>
                          <span>Coupons</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div '>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={my_cart} alt="" width={'14px'} height={'14px'} />
                          </div>
                          <span>My Cart</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div '>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={my_wishlist} alt="" width={'14px'} height={'14px'} />
                          </div>
                          <span>My Wishlist</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div '>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={my_account} alt="" width={'14px'} height={'14px'} />
                          </div>
                          <span>My Account</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div more_on'>
                    <li className='nav-list'>
                      <a href="">
                        <div className='list-data'>
                          <div className='super-img flixcart'>
                            <img src={my_notification} alt="" width={'12px'} height={'14px'} />
                          </div>
                          <span>My Notifications</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div'>
                    <li className='nav-list'>
                      <a href="">
                          Notification Preferences
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div'>
                    <li className='nav-list'>
                      <a href="">
                          Help Centre
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
            <div className='nav-body'>
                <ul className='nav-unlist'>
                  <div className='nav-list-div'>
                    <li className='nav-list'>
                      <a href="">
                          Legal
                      </a>
                    </li>
                  </div>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav