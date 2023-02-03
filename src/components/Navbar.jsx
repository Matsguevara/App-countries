import React from 'react'
import "./styles/Navbar.css"

const Navbar = ({changeTheme, theme}) => {
  return (
    <nav className='navbar'>
        <h1 className='navbar__tittle'>Where in the world?</h1>
        <div onClick={changeTheme} className='navbar__btn'>
        <i className={`navbar__icon bx bx-${theme === "light" ? "moon" : "sun"}`}></i>
        <h4 className='navbar__textTheme'>Dark Mode</h4>
        </div>
    </nav>
  )
}

export default Navbar