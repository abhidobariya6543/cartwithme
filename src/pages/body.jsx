import React from 'react'
import './body.css'
import Advertisement from '../components/advertisement/Advertisement'
import { Carousel } from '../slideshow/carousel'
import { slides, slidesTab, slidesLap, slideLarge } from '../data/carouselData.json'
import Menulist from '../menulist/Menulist'
import TopDeal from '../components/Top deals/TopDeal'
import Blockbuster from '../components/blockbuster/blockbuster'
import FeatureBrands from '../components/featured brands/FeatureBrands'
import JackpotDeal from '../components/jackpotdeals/JackpotDeal'
import MenulistLap from '../menulist/MenulistLap'
import Offers from '../components/offers/Offers'
import { menulist, menulistTwo, menulistLap, menulistLarge } from '../data/menulistData.json'
import { blockbuster, jackpot, topdeal, topdeal2, topdeal3 } from '../data/deals.json'
import { featurebrands, featurelap } from '../data/featurebrands.json'
import Advertisementthree from '../components/advertisement/Advertisementthree'
import { offerOne, offerTwo } from '../components/adData/topadd.json'

function Body() {
  return (
    <div className='body-container'>
      <div className='body-width'>
        {/* <MenulistLap data={menulistLap} datatwo={menulistLarge} /> */}
        <Carousel data={slides} datatwo={slidesTab} datathree={slidesLap} datafour={slideLarge} />
        <Menulist dataOne={menulist} dataTwo={menulistTwo} />
        <Advertisementthree data={offerOne} />
        <TopDeal data={topdeal} ispink={false} />
        <Advertisement />
        <Advertisement data={"https://rukminim1.flixcart.com/fk-p-flap/880/300/image/e051157c780aa3ec.jpeg?q=60"} />
        <Advertisementthree data={offerTwo} />
        <Advertisement data={"https://rukminim1.flixcart.com/fk-p-flap/786/288/image/16ea1dfbd8fdda18.png?q=60"} />
        <TopDeal data={topdeal2} ispink={true} />
        <TopDeal data={topdeal3} ispink={false} />
        {/* <Offers />
        <Blockbuster data={blockbuster} />
        <FeatureBrands data={featurebrands} datatwo={featurelap} />
        <JackpotDeal data={jackpot} /> */}
      </div>

    </div>
  )
}

export default Body