import React from 'react'
import './Buyproduct_Body.css'
import arrow from '/images/green_arrow_down.svg'
import wowdeal from '/images/wowdeal.svg'
import dropdown from '/images/dropdown_white.svg'
import location from '/images/buybody_location.svg'
import arrow_right from '/images/arrowRight-logo.svg'
import not_delivery from '/images/not_deliverable.svg'
import superCom from '/images/superCom.svg'
import greystar from '/images/greyStar.svg'
import arrow_down from '/images/Chevron.svg'

function Buyproduct_Body({ product }) {
    const description = [
        { id: 1, head: 'Product highlights', detail: 'Key features, expiry, usage, and more' },
        { id: 2, head: 'All details', detail: 'Features, description and more' },
        { id: 3, head: 'Ratings and reviews', detail: 'based on 1,95,412 ratings and 17,164 reviews' },
        { id: 4, head: 'Questions and Answers', detail: 'Find answers to commonly asked questions' }
    ]
    const conditions = [
        { id: 1, src: '/images/no_return.svg', name: 'No returns' },
        { id: 2, src: '/images/no_cash_on_delivery.svg', name: 'No cash on delivery' },
        { id: 3, src: '/images/buyproduct_f-assure.svg', name: 'Flipkart Assured' }
    ]
    const quantity = [
        { id: 1, quantity: '200 g', PricePerQuan: '(₹280/250g)' },
        { id: 2, quantity: '450 g', PricePerQuan: '(₹280/250g)' },
        { id: 3, quantity: '500 g', PricePerQuan: '(₹280/250g)' },
        { id: 4, quantity: '1 kg', PricePerQuan: '(₹280/250g)' }
    ]
    return (
        <div className='buybody_main'>
            {/* <div className='buybody_selected'>
            <div className='selected_text'>Selected Quantity:</div>
            <div className='selected_quantity'>200 g</div>
        </div> */}
            {/* <div className='buybody_quantities'>
            <div className='quantities_div'>
                {
                    quantity.map((item)=>(
                        <div className={`quantity_div ${item.id===1?'':'quantity_pad'}`} key={item.id}>
                            <div className={`quantity ${item.id===1?'':'quantity_color'}`}>{item.quantity}</div>
                            <div className='priceper_quan'>{item.PricePerQuan}</div>
                        </div>
                    ))
                }
            </div>
            <div className='not_delivery'>Not deliverable in your location</div>
        </div> */}
            <div className='buybody_name'>
                <div className='buybody_product_name'>
                    <div className='buybody_visit'>
                        <div className='buybody_happilo'>Happilo</div>
                        <div className='buybody_store'>Visit store</div>
                    </div>
                    <div className='buybody_brand'>Premium Naturals Californian Almonds Almonds (1 x 200 g)</div>
                </div>
            </div>
            <div className='buybody_price'>
                <div className='big_billion'>Big Billion Days Price</div>
                <div className='bigbillion_price'>
                    <div className='bigbillion_discount'>
                        <img src={arrow} alt="" className='discount_img' />
                        <div className='discount_percent'>19%</div>
                    </div>
                    <div className='bigbillion_overline'>275</div>
                    <div className='bigbillion_rate'>₹224</div>
                </div>
            </div>
            <div className='buybody_offers'>
                <div className='buybody_wowdeal'>
                    <div className='wowdeal'>
                        <div className='wowdeal_div'><img src={wowdeal} alt="" /></div>
                        <div className='wowdeal_buy'>Buy at ₹197</div>
                        <div className='wowdeal_dropdown'><img src={dropdown} alt="" /></div>
                    </div>
                </div>
                <div className='apply_offer'>
                    <div className='apply_offer_text'>Apply offers for maximum savings!</div>
                </div>
            </div>
            <div className='buybody_delivery'>
                <div className='delivery_head'>Delivery details</div>
                <div className='delivery_details'>
                    <div className='delivery_location'>
                        <div className='delivery_location_div'>
                            <img src={location} alt="" />
                            <div className='location_text'>Location not set</div>
                        </div>
                        <div className='delivery_select'>
                            <div className='select_text'>Select delivery location</div>
                            <img src={arrow_right} alt="" />
                        </div>
                    </div>
                    <div className='not_deliverable'>
                        <div className='not_deliverable_div'>
                            <img src={not_delivery} alt="" />
                            <div className='not_deliverable_text'>Not deliverable at your location</div>
                        </div>
                    </div>
                    <div className='supercomnet_main'>
                        <div className='supercomnet_div'>
                            <img src={superCom} alt="" />
                            <div className='supercomnet_head'>Fulfilled by SuperComNet</div>
                        </div>
                        <div className='supercomnet_details'>
                            <div className='supercomnet_rate'>4.3</div>
                            <img src={greystar} alt="" className='grey_star' />
                            <div className='supercomnet_dot'>•</div>
                            <div className='supercomnet_text'>9 years with Flipkart</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='buybody_conditions'>
                <div className='conditions_div'>
                    {
                        conditions.map((item) => (
                            <div className='condition_main'>
                                <div className='condition_div' key={item.id}>
                                    <img src={item.src} alt="" className='condition_img' />
                                    <div className={`condition_text ${item.id === 1 ? 'condition_return' : 'condition_cash'}`}>{item.name}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                description.map((item) => (
                    <div className='product_highlights' key={item.id}>
                        <div className='highlights_text'>{item.head}</div>
                        <div className='highlights_content'>{item.detail}</div>
                        <div className='highlights_drop'><img src={arrow_down} alt="" className='arrow_down' /></div>
                    </div>
                ))
            }
            <div className='buybody_cart'>
                <div className='add_cart'>
                    <div className='add_cart_text'>Add to cart</div>
                </div>
                <div className='change_address' style={{
                    background: "linear-gradient(90deg, #FFE259 0%, #FFA751 100%)",
                }}>
                    <div className='change_address_text'>Buy at ₹{product?.price ?? 0}</div>
                </div>
            </div>
        </div>
    )
}

export default Buyproduct_Body