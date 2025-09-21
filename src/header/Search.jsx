import React from 'react'
import { Link } from 'react-router-dom'
import go_back_arrow from '/images/go_back_arrow.svg'
import './search.css'

function Search() {
  return (
    <div className='search_main'>
        <div className='search_div'>
            <form action="" className='search_form'>
                <Link to={-1} className='search_img'>
                <img src={go_back_arrow} alt="" />
                </Link>
                <input type="search" placeholder='Search for Products, Brands and More' className='search_input'/>
            </form>
            <div className='search_list_div'>
                <div className='search_discover'>
                    Discover More
                </div>
                <div className='search_list'>
                    
                    <div className='search_content_div' ><div className='search_content'>mobiles</div></div>
                    <div className='search_content_div' ><div className='search_content'>shoes</div></div>
                    <div className='search_content_div' ><div className='search_content'>t shirts</div></div>
                    <div className='search_content_div' ><div className='search_content'>laptops</div></div>
                    <div className='search_content_div' ><div className='search_content'>watches</div></div>
                    <div className='search_content_div' ><div className='search_content'>tv</div></div>
                    <div className='search_content_div' ><div className='search_content'>sarees</div></div>
                    <div className='search_content_div' ><div className='search_content'>headphones</div></div>
                    <div className='search_content_div' ><div className='search_content'>bluetooth</div></div>
                    <div className='search_content_div' ><div className='search_content'>fridge</div></div>
                    <div className='search_content_div' ><div className='search_content'>bedsheet</div></div>
                    <div className='search_content_div' ><div className='search_content'>water bottle</div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search