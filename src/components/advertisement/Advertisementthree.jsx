import React from 'react'
import '../advertisement/advertisement.css'
// import { offerOne } from '../adData/topadd.json'

function Advertisementthree({ data }) {
  return (<div>
    <div className='ad-maindiv'>
      <div className='ad-div'>
        {data.map((item, i) => {
          return <a href="">
            <div className='poco-mobile'><img src={item.src} alt="" /></div>
            <div className='poco-tablet'><img src={item.src} alt="" /></div>
          </a>
        })}
      </div>
    </div>
  </div>
  )
}

export default Advertisementthree