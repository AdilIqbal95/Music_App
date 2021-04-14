import React from 'react';
import { NavLink  } from 'react-router-dom';

import { BackButton } from '..';
import './style.css'

const Nav = () => {
    return (
        <nav>
            <BackButton />
            <NavLink exact to="/" activeClassName="current">home</NavLink>
            <NavLink to="/albums" activeClassName="current">all albums</NavLink>
        </nav>
    );
}

export default Nav;