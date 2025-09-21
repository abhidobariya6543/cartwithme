import React from 'react'
import poco from '/images/poco.jpeg'
import '../advertisement/advertisement.css'
import SmartPhone from './SmartPhone'
import HomeEquipment from './HomeEquipments'
import { smartphone, electronics } from '../adData/smartphone.json'
import { homeEquipment, items } from '../adData/homeEquipment.json'

function Advertisement({ data }) {
  return (<div>
    <div className='ad-maindiv'>
      <div className='ad-div'>
        <a href="">
          <div className='poco-mobile'><img src={data ? data : "https://rukminim1.flixcart.com/fk-p-flap/880/200/image/36477eb373b9a3ea.jpg?q=60"} alt="" /></div>
          <div className='poco-tablet'><img src={data ? data : "https://rukminim1.flixcart.com/fk-p-flap/880/200/image/36477eb373b9a3ea.jpg?q=60"} alt="" /></div>
        </a>
      </div>
    </div>
    <SmartPhone data={smartphone} datatwo={electronics} />
    <HomeEquipment data={homeEquipment} datatwo={items} />
  </div>
  )
}

export default Advertisement