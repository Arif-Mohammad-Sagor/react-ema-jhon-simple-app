import React from 'react'

import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={logo} />
      </div>
      <div className='nav-item-container'>
        <a href="/home">Home</a>
        <a href="/order">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}

export default Header