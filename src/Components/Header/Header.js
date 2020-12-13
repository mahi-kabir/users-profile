import React from 'react';
import './Header.css';
import users from './users.png'

const Header = () => {
    return (
        <div className =' header'>
            <img src={users}  className = 'a' alt="" srcset=""/>
            <h1 className = 'a'>This is users' collection</h1>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
        
    );
};

export default Header;