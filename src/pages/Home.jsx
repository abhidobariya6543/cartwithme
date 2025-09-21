import React from 'react'
import Header from '../header/Header'
import HeaderDesk from '../header/HeaderDesk'
import './Home.css'
import Footer from '../footer/Footer'
import Body from './body'

function Home() {
  return (
    <div className='home_div'>
        <Header></Header>
        <HeaderDesk></HeaderDesk>
        <div className='body'>
            <Body></Body>
        </div>                                       
        <Footer/>
    </div>  
  ) 
} 

export default Home