import React from 'react'
import Link from "next/link";

function Navmenu() {
  return (
    <>
    <nav className="navbar ">
      <div className="navbar-container container">
          <input type="checkbox"  id=""/>
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
              <li><Link  className='navlink' href='/'>HOME</Link></li>
              <li><Link  className='navlink' href='/about'>ABOUT</Link></li>
              <li><Link  className='navlink' href='/project'>PROJECT</Link></li>
              <li><Link  className='navlink' href='/contact'>CONTACT</Link></li>
            
          </ul>
          <p className="logo"></p>
      </div>
  </nav>
  </>
  )
}

export default Navmenu