import React from 'react'
import Link from "next/link";
import { navLinks } from "./Data";




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
            {navLinks.map((elm,ind)=>{
              return(
              <li key={ind}><Link  className='navlink' href={elm.path}>{elm.link.toUpperCase()}</Link></li>
              )
            })}
              
          </ul>
          <p className="logo"></p>
      </div>
  </nav>
  </>
  )
}

export default Navmenu