import React from 'react'
import Assure from './Assure'
import Health_offer from './Health_offer'
import Organic from './Organic'
import New_arrival from './New_arrival'
import Value_pack from './Value_pack'
import Festival_marker from './Festival_marker'
import Gst_invoice from './Gst_invoice'
import Available from './Available'

function Remaining_filter() {
  return (
    <div>
        <Assure/>
        <Health_offer/>
        <Organic/> 
        <New_arrival/>
        <Value_pack/>
        <Festival_marker/>
        <Gst_invoice/>
        <Available/>
    </div>
  )
}

export default Remaining_filter