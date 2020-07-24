import React from 'react'
import './NavMenu.css'
import {NavLink} from 'react-router-dom'
import logo from './../../NB-logo.png';

export default function NavMenu() {
    return(
        <header>
            <nav>
                <div className="logo-container">
                    <NavLink to="/"><img src={logo} alt="N.B." /></NavLink>
                </div>
                
                <ul>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/visuals">Visuals</NavLink></li>
                    <li><NavLink to="/photos">Photos</NavLink></li>
                    <li><NavLink to="/lyrics">Lyrics</NavLink></li>
                    <li><NavLink to="/press">Press</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}