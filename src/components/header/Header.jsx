import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Baz.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I am </h5>
        <h1> Bazli Nabil </h1>
        <h5 className="text_light"> Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header