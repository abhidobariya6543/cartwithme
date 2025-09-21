import React, { useState } from 'react'
import './SingleProductPrice.css'
import offer_list from '/images/offer_list.webp'
import white_star from '/images/white_star.svg'

function SingleProductOffers() {
    const [readMore,setReadMore]=useState(false)
    const offerlist=[
        {
            id:1,
            combo:'Combo Offer',
            buy:'Buy 4 or more items save 7%',
            seeMore:'See all products'
        },
        {
            id:2,
            combo:'Combo Offer',
            buy:'Buy 3 items save 5%; Buy 4 save 7%; Buy 5+ save 10%',
            seeMore:'See all products'
        },
        {
            id:3,
            combo:'Bank Offer',
            buy:'5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter',
            seeMore:null
        },
        {
            id:4,
            combo:'Bank Offer',
            buy:'5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter',
            seeMore:null
        }
    ]
    const specification=[
        {
            id:1,
            descr:"Brand",
            value:"Happilo"

        },
        {
            id:2,
            descr:"Quantity",
            value:"200g"

        },
        {
            id:3,
            descr:"Type",
            value:"Almonds"

        },
        {
            id:4,
            descr:"Variant",
            value:"Plain"

        },
        {
            id:5,
            descr:"Container Type",
            value:"Pouch"

        },
        {
            id:6,
            descr:"Model Name",
            value:"Premium Naturals Californian Almonds"

        },
        {
            id:7,
            descr:"Combo",
            value:"No"

        },
        {
            id:8,
            descr:"Maximum Sheif Life",
            value:"366 Days"

        },
        {
            id:9,
            descr:"Ingredients",
            value:"NA"

        }
    ]
  return (
    <div className='product_available_offers'>
        <div className='product_offers_head'>Available offers</div>
        <div className='product_offers'>
            <div className='product_offers_list'>
                {
                    offerlist.map((item)=>{
                        return <span className='product_offer' key={item.id}>
                                <img src={offer_list} alt="" className='product_offer_img'/>
                                <li className='product_offer_li'>
                                    <span className='product_offer_combo'>{item.combo}</span>
                                    <span className='product_offer_buy'>{item.buy}</span>
                                    <span className='product_offer_see'>{item.seeMore}</span>
                                    <span className='product_offer_tc'>T&C</span>
                                </li>
                            </span>
                    })
                }
            </div>
            <div className='product_offer_view'>
                <a href="" className='product_view_link'>View 8 more offers</a>
            </div>
        </div>
        <div className='product_delivery'>
            <div className='product_delivery_pin'>
                <div className='delivery_text'>
                    Delivery
                </div>
                <div className='delivery_pincode'>
                    <form action="" className='delivery_form'>
                        <input className='delivery_input_field' placeholder='Enter Delivery Pincode'></input>
                    </form>
                    <span className='delivery_pin_check'>
                        Check
                        <div className='delivery_enter_pin'>
                            Enter pincode
                        </div>
                    </span>
                </div>
            </div>
            <div className='delivery_available_pin'>
                <div className='availablity_pin'>Currently out of stock in this area</div>
            </div>
        </div>
        <div className='product_quality'>
            <span className='quality_head'>Quantity</span>    
            <ul className='quality_ul'>
                <li className='quality_li'><span className='quality_text'>200 g</span></li>
                <li className='quality_li'><span className='quality_text'>450 g</span></li>
                <li className='quality_li'><span className='quality_text'>500 g</span></li>
                <li className='quality_li'><span className='quality_text'>1 kg</span></li>
            </ul>
        </div>
        <div className='product_highlights'>
            <div className='highlights_head'>Highlights</div>
            <ul className='hightlights_ul'>
                <li className='highlights_li'>Plain</li>
                <li className='highlights_li highlights_pouch'>Comes in a Pouch</li>
            </ul>
        </div>
        <div className='product_important'>
            <div className='important_head'>Important Note</div>
            <span className='important_text'>Image/color/design may vary</span>
        </div>
        <div className='product_seller'>
            <div className='seller_head'>Seller</div>
            <div className='seller_content'>
                <div className='seller_superCom'>
                    <span className='superCom_text'>SuperComNet</span>
                    <div className='superCom_rating'>
                        4.3
                        <img src={white_star} alt="" className='superCom_star'/>
                    </div>
                </div>
                <div className='seller_options'>
                    <ul className='seller_ul'>
                        <li className='seller_li'>
                            <div className='seller_li_div'>
                                No Returns Applicable
                                <span className='seller_question'>?</span>
                            </div>
                        </li>
                        <li className='seller_li'>
                            <div className='seller_li_div'>
                                GST invoice available
                                <span className='seller_question'>?</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='seller_seeOther'>See other sellers</div>
            </div>
        </div>
        <div className='product_description'>
            <div className='description_head'>Description</div>
            <div className='description_details'>
                Nut and dry fruits are nutrient-rich snacks packed with essential vitamins, minerals, and antioxidants. 
                They offer a natural source of protein, healthy fats, and fiber, promoting overall health and well-being.
                Perfect for snacking, cooking, or adding to desserts, these premium-quality nuts and dried fruits provide 
                a delicious and energy-boosting treat for all ages
            </div>
        </div>
        <div className='product_specification'>
            <div className='specifications_head'>Specifications</div>
            <div>
                <div className={`${readMore===true?'spedification_active':'specification_box'}`} >
                    <div className='product_inthebox'>
                        <div className='inthebox_head'>In The Box</div>
                        <table className='general_table'>
                            <tbody>
                                <tr>
                                <td className='inthebox_pack'>Pack of</td>   
                                <td className='inthebox_quan'>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='product_general'>
                        <div className='general_head'>General</div>
                        <table className='general_table'>
                            <tbody>
                                {
                                    specification.map((item)=>{
                                        return <tr className='general_table_row' key={item.id}>
                                                    <td className='general_brand'>{item.descr}</td>
                                                    <td className='general_happilo'>{item.value}</td>
                                                </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <button className={`${readMore===true?'display_none':'product_readmore'}`} onClick={()=>setReadMore(true)}>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProductOffers