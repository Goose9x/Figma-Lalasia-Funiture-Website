import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
function Navbar() {
  const [isShrinked, setIsShrinked] = useState(false);
  return (
    <>
      <div id='Navbar'>
        <nav className='navbar-container'>
          <div className='nav-left'>
            <div className='nav-logo'>
              <img src={logo} alt='logo' />
            </div>
            <b>Lalasia</b>
          </div>
          <div
            className={isShrinked ? "nav-center" : "nav-center menu-responsive"}
          >
            <ul className='nav-menu'>
              <li>Product</li>
              <li>Services</li>
              <li>Article</li>
              <li>About us</li>
            </ul>
          </div>
          <div className='nav-right'>
            <div>
              <ion-icon name='bag-outline'></ion-icon>
            </div>
            <div>
              <ion-icon name='person-outline'></ion-icon>
            </div>
          </div>
          <div className='hambuger' onClick={() => setIsShrinked(!isShrinked)}>
            <ion-icon name='menu-outline'></ion-icon>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
