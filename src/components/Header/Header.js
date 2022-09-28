import React from 'react';
import './Header.css';
import navImg from '../../Images/nav-img.jpg';

const Header = () => {
    return (
        <div>
            <nav>
                <img src={navImg} alt="" />
                <h3>Workout Wonders</h3>
            </nav>
        </div>
    );
};

export default Header;