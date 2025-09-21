import React from 'react'
import '../advertisement/advertisement.css'
import { useNavigate } from 'react-router-dom'

function HomeEquipment({data,datatwo}) {
    const navigate=useNavigate()
    const handleRoute=(item)=>{
        if(item==='Dry Fruits'){
            navigate('/food_health')
        }
    }
  return (
    <div className='homeEquipment-maindiv'>
        <div className='homeEquipment-hddiv'>
            <div className='homeEquipment-heading'>
                <div className='homeEquipment_hd_pad'>Home</div>
                <div className='homeequipment_hd_lg'>Beauty, Food, Toys & more</div>
            </div>
            <div className='homeEquipment-overflow'>
                <div className='homeEquipment-collection'>
                    {
                        data.map((item)=>{
                            return <a href="" className='homeLap'key={item.id}>
                                        <div className='homeEquipment'>
                                            <div className='homeEquipment-img'>
                                                <img src={item.src} alt={item.alt} /> 
                                            </div>
                                            <div className='homeEquipment-brand'>{item.name}</div>
                                            <div className='price-tag'>{item.price}</div>
                                        </div>
                                    </a>
                        })
                    }
                    {
                        datatwo.map((item)=>{
                            return <a href="" className='homeLarge'key={item.id}>
                                        <div className='homeEquipment' onClick={()=>handleRoute(item.name)}>
                                            <div className='homeEquipment-img'>
                                                <img src={item.src} alt={item.alt} /> 
                                            </div>
                                            <div className='homeEquipment-brand'>{item.name}</div>
                                            <div className='price-tag'>{item.price}</div>
                                        </div>
                                    </a>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeEquipment