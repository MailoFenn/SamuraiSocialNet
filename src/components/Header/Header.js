import React from 'react';
import logo from '../../logo_samurai.jpg';
import css from './Header.module.css';

const Header = () => {
    return(
        <header>
            <img src={logo} alt="logo"/>
        </header>
    );
}

export default Header;