import React, { useState } from 'react'
import Health_filter from './health_filter'
import Health_product from './Health_product'
import './health_body.css'

function Health_body({setSortType,softType}) {
  return (
    <div className='health_body'>
      <div className='health_body_main'>
        <Health_filter />        
        <Health_product onSort={setSortType} softType={softType} />
      </div>
    </div>
  )
}

export default Health_body