import React, { useState } from 'react'
import go_back_arrow from '/images/goback_arrow_black.svg'
import flipfoodlogo from '/images/flipfoodlogo.png'
import { Link, useNavigate } from 'react-router-dom'
import searchIcon from '/images/search-icon.svg'
import cart from '/images/Cart.svg'
import './header_food.css'
import sort from '/images/sort.svg'
import filter from '/images/filter.svg'
import new_arrval from '/images/new_arrival.webp'
import popular from '/images/propular_brands.webp'
import Sort from './Sort'
     
function Header_food({setSortType,sortType}) {
    const [readMore,setReadMore]=useState(false)
    const [sortOpen,setSortOpen] =useState(false)
    const navigate=useNavigate()
    const handleRoute=()=>{
        navigate('/search')
    }
    console.log(sortOpen)
  return (
    <>
        {
            sortOpen && <Sort onclose={()=>setSortOpen(false)} onSort={setSortType} sortType={sortType} />
        }
        <div className='food_main'>
                
            <Link to={'/'} className='food_go_back same_style_food'>
                <img src={go_back_arrow} alt="" className='arrow_back' />
            </Link>
            
            <a href="" className='food_flip' >
                <img src={flipfoodlogo} alt=""  className='flip_food_img' />
            </a>
            <div className='health_div'>
                <h1>Health Care</h1>
            </div>
            <a href="" className='food_search same_style_food' onClick={()=>handleRoute()} >
                <img src={searchIcon} alt="" className='search_logos' />
            </a>
            <a href="" className='food_cart same_style_food' ><img src={cart} alt="" className='search_logos'/></a>
            <a href="" className='food_login same_style_food' ><span>Login</span></a>
        </div>
        <div className='sort_filter'>
            <div className='sort' onClick={()=>setSortOpen(true)}>
                <img src={sort} alt="" />
                <div className='sort_text'>Sort</div>
            </div>
            <div className='border_sort_filter'></div>
            <div className='filter'  onClick={()=>navigate('/food_health/filter')}>
                <img src={filter} alt="" />
                <div className='filter_text'>Filter</div>
            </div>
        </div>
        <div className='shortcut_arrange'>
            <div className='shortcut_div'>
                <div className='shortcut_sbdiv'>
                    <div className='arrange_main'>
                        <div className='arrange_div'>
                            <div className='arrange_logo'>
                                <div className='arrange_logo_div'>
                                    <img src={popular} alt="" className='arrange_img' />
                                </div>
                            </div>
                            <div className='arrange_text_main'>
                                <div className='arrange_text_div'><span className='arrange_text'>Popular Brands</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='arrange_main'>
                        <div className='arrange_div'>
                            <div className='arrange_logo'>
                                <div className='arrange_logo_div'>
                                    <img src={new_arrval} alt="" className='arrange_img' />
                                </div>
                            </div>
                            <div className='arrange_text_main'>
                                <div className='arrange_text_div'><span className='arrange_text'>New Arrivals</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='readmore_main'>
            <div className='readmore_div'>
                <div className={`${readMore===true?'':'paragraph_readmore'}`}>
                    <p>Dry fruits are healthy and nutritional snacks. They are beneficial for health in several ways. They help in improving digestion, memory and other metabolic functions of the body. They help in maintaining glucose levels and blood pressure. You can keep these handy when you are travelling. A box of dry fruits also makes for a great gift and is often given to family and friends on auspicious occasions. A usual pack will contain almonds, cashews, pistachios, figs, and more. They make for a perfect gift. Nuts and seeds are also used to garnish both sweet and savoury dishes. Dry fruit and nuts online price depend on the brand and the quantities available. You can also choose from organic nuts and seeds, according to your requirements. You can also opt for a mix if you do not want to buy individual packs of nuts and fruits. Buy top quality nuts from trusted brands such as </p>
                    <p><br /></p>
                </div>
                    <span className='readmore_text'>
                        <a  onClick={()=>setReadMore(true)} className={`${readMore===true?'readmore':''}`}>Read More</a>
                        <a onClick={()=>setReadMore(false)} className={`${readMore===false? 'seeless':''}`}>See Less</a>
                    </span>             
            </div>
        </div>
    </>
  )
}

export default Header_food