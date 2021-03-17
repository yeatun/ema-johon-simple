import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="Header">
           <img src={logo} alt=""/>
           <nav>
               <Link to="/Shop">Home</Link>
               <Link to="/review">order review</Link>
               <Link to="inventory">Manage Inventory</Link>
               <button onClick ={()=> setLoggedInUser({})}>sign out </button>
            </nav>
        </div>
    );
};

export default Header;