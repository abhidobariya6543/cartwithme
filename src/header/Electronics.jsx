import React from 'react'
import './menu_dropdown.css'

function Electronics() {
    const mobile=[
        {id:1,name:"Mi"},
        {id:2,name:"Realme"},
        {id:3,name:"Samsung"},
        {id:4,name:"Infinix"},
        {id:5,name:"Oppo"},
        {id:6,name:"Apple"},
        {id:7,name:"vivo"},
        {id:8,name:"Honor"},
        {id:9,name:"Asus"},
        {id:10,name:"Poco X2"},
        {id:11,name:"realme Narzo 10"},
        {id:12,name:"Infinix Hot 9"},
        {id:13,name:"IQOO 3"},
        {id:14,name:"iPhone SE"},
        {id:15,name:"Motorola razr"},
        {id:16,name:"realme Narzo 10A"},
        {id:17,name:"Motorola g8 power lite"}
    ]
    const MobileAccessories=[
        {id:1,name:"Mobile Cases"},
        {id:2,name:"Headphones & Headsets"},
        {id:3,name:"Power Banks"},
        {id:4,name:"Screenguards"},
        {id:5,name:"Memory Cards"},
        {id:6,name:"Smart Headphones"},
        {id:7,name:"Mobile Cables"},
        {id:8,name:"Mobile Chargers"},
        {id:9,name:"Mobile Holders"}
    ]
    const WearableTech=[
        {id:1,name:"Smart Watches"},
        {id:2,name:"Smart Glasses (VR)"},
        {id:3,name:"Smart Bands"}
    ]
    const HealthCare=[
        {id:1,name:"Bp Monitors"},
        {id:2,name:"Weighing Scale"}
    ]
    const CompAccessories=[
        {id:1,name:"External Hard Disks"},
        {id:2,name:"Pendrives"},
        {id:3,name:"Laptop Skins & Decals"},
        {id:4,name:"Laptop Bags"},
        {id:5,name:"Mouse"}
    ]
    const CompPeriph=[
        {id:1,name:"Printers & Ink Cartridges"},
        {id:2,name:"Monitors"}
    ]
    const Speaker=[
        {id:1,name:"Home Audio Speakers"},
        {id:2,name:"Home Theatres"},
        {id:3,name:"Soundbars"},
        {id:4,name:"Bluetooth Speakers"},
        {id:5,name:"DTH Set Top Box"}
    ]
    const Camera=[
        {id:1,name:"DSLR & Mirrorless"},
        {id:2,name:"Compact & Bridge Cameras"},
        {id:3,name:"Sports & Action"}
    ]
    const CamAccessories=[
        {id:1,name:"Lens"},
        {id:2,name:"Tripods"}
    ]
    const Featured=[
        {id:1,name:"Google Assistant Store"},
        {id:2,name:"Laptops on Buyback Guarantee"},
        {id:3,name:"Flipkart SmartBuy"},
        {id:4,name:"Li-Polymer Power Banks"},
        {id:5,name:"Sony PS4 Pro & Slim"},
        {id:6,name:"Apple Products"},
        {id:7,name:"Microsoft Stores"},
        {id:8,name:"Lenovo Phab Series"},
        {id:9,name:"JBL Speakers"},
        {id:10,name:"Smartphones On Buyback Guarantee"},
        {id:11,name:"Philips"},
        {id:12,name:"Dr.Morepen"},
        {id:13,name:"Complete Mobile Protection"},
        {id:14,name:"Mobiles No Cost EMI"},
        {id:15,name:"Huawei Watch Gt 2e Smart Watch"}
    ]
  return (
    <div className='electronics_main'>
        <div className='elec_each_div'>
            <span className='elec_head_text'>Mobiles</span>
            {
                mobile.map((item)=>{
                    return  <span className='elec_list_text'>{item.name}</span>
                            
                })
            }
        </div>
        <div className='elec_each_div second_div'>  
            <span className='elec_head_text'>Mobile Accessories</span>
            {
                MobileAccessories.map((item)=>{
                    return <span className='elec_list_text'>{item.name}</span>
                })
            }
            <span className='elec_head_text'>Smart Wearable Tech</span>
            {
                WearableTech.map((item)=>{
                    return <span className='elec_list_text'>{item.name}</span>
                })
            }
            <span className='elec_head_text'>Health Care Appliances</span>
            {
                HealthCare.map((item)=>{
                    return <span className='elec_list_text'>{item.name}</span>
                })
            }
        </div>
        <div className='elec_each_div'>
            <span className='elec_head_text'>Laptops</span>
            <span className='elec_list_text'>Gaming Laptops</span>
            <span className='elec_head_text'>Destop PCs</span>
            <span className='elec_head_text'>Gaming & Accessories</span>
            <span className='elec_head_text'>Computer Accessories</span>
            {
                CompAccessories.map((item)=>{
                    return <span className='elec_list_text'>{item.name}</span>
                })
            }
            <span className='elec_head_text'>Computer Peripherals</span>
            {
                CompPeriph.map((item)=>{
                    return <span className='elec_list_text'>{item.name}</span>
                })
            }
            <span className='elec_head_text'>Tablets</span>
            <span className='elec_list_text'>Apple iPads</span>
        </div>
        <div className='elec_each_div second_div'>
            <span className='elec_list_text'>Televisions</span>
            <span className='elec_head_text'>Speakers</span>
            {
                Speaker.map((item)=>{
                    return <span className='elec_list_text'>{item.name}</span>
                })
            }
            <span className='elec_head_text'>Smart Home Automation</span>
            <span className='elec_list_text'>Google Nest</span>
            <span className='elec_head_text'>Camera</span>
            {
                Camera.map((item)=>{
                    return  <span className='elec_list_text'>{item.name}</span>
                })
            }
            <span className='elec_head_text'>Camera Accessories</span>
            {
                CamAccessories.map((item)=>{
                    return <span className='elec_list_text'>{item.name}</span>
                })
            }
            <span className='elec_head_text'>Network Components</span>
            <span className='elec_list_text'>Routers</span>
        </div>
        <div className='elec_each_div'>
            <span className='elec_head_text'>Featured</span>
            {
                Featured.map((item)=>{
                    return <span className='elec_list_text'>{item.name}</span>
                })
            }
        </div>
    </div>
  )
}

export default Electronics