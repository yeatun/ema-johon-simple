import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
           <img src={logo} alt=""/>
           <nav>
               <a href="/Shop">Home</a>
               <a href="/review">order review</a>
               <a href="manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;