import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navItems'>
        <a className='title' href="">Raydex</a>
            <a href="">Home</a>
            <a href="">My Raydex</a>
            <a href="">About</a>
        </div>
    </nav>

    </>
  )
}

export default Navbar