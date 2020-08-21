import React, { useState } from 'react'
import './NavMenu.css'
import {NavLink} from 'react-router-dom'
import logo from './../../NB-logo.png';

export default function NavMenu() {
    const [toggle, updateToggle] = useState(true);

    const hideMenu = (e) => {
        // TODO: figure out whether to load entire page and not bother using NavLink, or keep it without window.location
        // e.preventDefault()
        // window.location = `/${e.target.text.toLowerCase()}`
        const navButtonTop = document.querySelector('.nav-menu-button').firstElementChild
        const navButtonBottom = document.querySelector('.nav-menu-button').lastElementChild
        const navMenuContainer = document.querySelector('.logo-container').nextElementSibling;

        navButtonTop.classList.remove('top-bar-clicked')
        navButtonBottom.classList.remove('bottom-bar-clicked')
        navMenuContainer.classList.remove('mobile-menu-visible')
        
        updateToggle(!toggle);

    }

    const toggleNav = (e) => {
        updateToggle(!toggle);

        const navButtonTop = document.querySelector('.nav-menu-button').firstElementChild
        const navButtonBottom = document.querySelector('.nav-menu-button').lastElementChild
        const navMenuContainer = document.querySelector('.logo-container').nextElementSibling;

        if (toggle) {
            navButtonTop.classList.add('top-bar-clicked')
            navButtonBottom.classList.add('bottom-bar-clicked')
            navMenuContainer.classList.add('mobile-menu-visible')
        }
        else {
            navButtonTop.classList.remove('top-bar-clicked')
            navButtonBottom.classList.remove('bottom-bar-clicked')
            navMenuContainer.classList.remove('mobile-menu-visible') 
        }
    }

    return(
        <header>
            <nav>
                <div className="logo-container">
                    <NavLink to="/"><img src={logo} alt="N.B." /></NavLink>
                </div>
                <div className="nav-menu-container">
                <ul>
                    <li><NavLink to="/about" onClick={(e) => hideMenu(e)}>About</NavLink></li>
                    <li><NavLink to="/visuals" onClick={(e) => hideMenu(e)}>Visuals</NavLink></li>
                    <li><NavLink to="/photos" onClick={(e) => hideMenu(e)}>Photos</NavLink></li>
                    <li><NavLink to="/lyrics" onClick={(e) => hideMenu(e)}>Lyrics</NavLink></li>
                    <li><NavLink to="/press" onClick={(e) => hideMenu(e)}>Press</NavLink></li>
                    <li><NavLink to="/contact" onClick={(e) => hideMenu(e)}>Contact</NavLink></li>
                </ul>
                </div>
                <div className="nav-menu-button" onClick={(e) => toggleNav(e)}>
                    <div className="bar top-bar" id="top-bar"></div>
                    <div className="bar bottom-bar" id="bottom-bar"></div>
                </div>
            </nav>
        </header>
    )
}