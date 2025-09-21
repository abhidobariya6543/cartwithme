import React from 'react'
import TopStories from './TopStories'
import Details from './Details'
import About from './About'
import './footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <TopStories></TopStories>
        <Details></Details>
        <About></About>
    </footer>
  )
}

export default Footer