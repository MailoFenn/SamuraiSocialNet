import React from 'react';
import css from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <div>
                <NavLink to={`/profile`}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={`/messages`}>Massage</NavLink>
            </div>
            <div>
                <NavLink to={`/news`}>News</NavLink>
            </div>
            <div>
                <NavLink to={`/music`}>Music</NavLink>
            </div>
            <div>
                <NavLink to={`/setting`}>Setting</NavLink>
            </div>
        </nav>
    );
}

export default Nav;