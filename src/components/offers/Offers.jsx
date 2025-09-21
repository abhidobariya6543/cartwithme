import React from 'react'
import Offer_first from './Offer_first'
import Offer_second from './Offer_second'
import Offer_third from './Offer_third'
import '../offers/Offers.css'
import {offerOne,offertwo,offerthree} from '../adData/offers.json'

function Offers() {
  return (
    <div>
        <Offer_first data={offerOne} />
        <Offer_second data={offertwo} />
        <Offer_third data={offerthree} />
    </div>
  )
}

export default Offers