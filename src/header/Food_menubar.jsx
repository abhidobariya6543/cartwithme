import React, { useState } from 'react'
import './food_menubar.css'
import arrow_down from '/images/more_logo.svg'
import Electronics from './Electronics'
import TvsLarge from './TvsLarge'
import MenLarge from './MenLarge'
import WomenLarge from './WomenLarge'
import BabyLarge from './BabyLarge'
import Furniturelarge from './Furniturelarge'
import SportLarge from './SportLarge'

function Food_menubar() {
    const [open,setOpen]=useState(null)
    const menu=[
        {id:1,name:'Electronics',src:arrow_down,alt:'electronics'},
        {id:2,name:'TVs & Appliances',src:arrow_down,alt:'tv_appliances'},
        {id:3,name:'Men',src:arrow_down,alt:'men'},
        {id:4,name:'Women',src:arrow_down,alt:'women'},
        {id:5,name:'Baby & Kids',src:arrow_down,alt:'baby_kids'},
        {id:6,name:'Home & Furniture',src:arrow_down,alt:'home_furniture'},
        {id:7,name:'Sports, Books & More',src:arrow_down,alt:'sports'},
        {id:8,name:'Flights',src:null,alt:'flights'},
        {id:9,name:'Offer Zone',src:null,alt:'offer'}
    ]
    const dropdown={
        electronics:<Electronics/>,
        tv_appliances:<TvsLarge/>,
        men:<MenLarge/>,
        women:<WomenLarge/>,
        baby_kids:<BabyLarge/>,
        home_furniture:<Furniturelarge/>,
        sports:<SportLarge/>
    }
  return (
    <div className='food_menubar_main'>
        <div className='food_menubar_div'>
            {
                menu.map((item)=>{
                    return <span className='food_menubar_element' key={item.id} onMouseEnter={()=>setOpen(item.name)} onMouseLeave={()=>setOpen(null)}>
                                {item.name}
                                <img src={item.src} alt="" className='food_menu_logo' />
                                {
                                open === item.name && dropdown[item.alt]
                                }
                            </span>
                })
            }
        </div>
    </div>
  )
}

export default Food_menubar