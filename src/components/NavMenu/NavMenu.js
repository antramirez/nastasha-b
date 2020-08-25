import React, { useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import './NavMenu.css'
import logo from './NB-Logo.svg';

export default function NavMenu() {
    const [toggle, updateToggle] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                if (document.querySelector('nav .nav-menu-container').classList.contains('mobile-menu-visible')) {
                    document.querySelector('nav .nav-menu-container').classList.remove('mobile-menu-visible')
                    toggleNav()
                }        
            }
        }

        //TODO: remove transition timeout

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const toggleNav = (e) => {
        const navButtonTop = document.querySelector('.nav-menu-button').firstElementChild
        const navButtonBottom = document.querySelector('.nav-menu-button').lastElementChild
        const navMenuContainer = document.querySelector('.logo-container').nextElementSibling

        if (toggle) {
            showMenu(navButtonTop, navButtonBottom, navMenuContainer)
        }
        else {
            hideMenu(navButtonTop, navButtonBottom, navMenuContainer)
        }
        updateToggle(!toggle)
    }

    const hideMenu = (topButton, bottomButton, menuContainer) => {
        // TODO: figure out whether to load entire page and not bother using NavLink, or keep it without window.location
        // e.preventDefault()
        // window.location = `/${e.target.text.toLowerCase()}`
        topButton.classList.remove('top-bar-clicked')
        bottomButton.classList.remove('bottom-bar-clicked')
        if (window.innerWidth <= 900) {
            handleTransition(menuContainer)
        }
        menuContainer.classList.remove('mobile-menu-visible')
    }

    const showMenu = (topButton, bottomButton, menuContainer) => {
        topButton.classList.add('top-bar-clicked')
        bottomButton.classList.add('bottom-bar-clicked')
        menuContainer.classList.add('mobile-menu-visible')
    }

    // set transition to hide/remove mobile menu and prevent transition when normal menu is visible
    const handleTransition = (c) =>{
        c.style.transition = '.3s all ease-in-out .2s'
        setTimeout(() => {
            // remove transition depending on browser compatibility
            (c.style.removeProperty) ? c.style.removeProperty('transition') : c.style.removeAttribute('transition');
        }, 500)
        // transitionTimer(c)
    }

    return(
        <header>
            <nav>
                <div className="logo-container">
                    <NavLink to="/"><img src={logo} alt="N.B." /></NavLink>
                </div>
                <div className="nav-menu-container">
                <ul>
                    <li><NavLink to="/about" onClick={(e) => toggleNav(e)}>About</NavLink></li>
                    <li><NavLink to="/visuals" onClick={(e) => toggleNav(e)}>Visuals</NavLink></li>
                    <li><NavLink to="/photos" onClick={(e) => toggleNav(e)}>Photos</NavLink></li>
                    <li><NavLink to="/lyrics" onClick={(e) => toggleNav(e)}>Lyrics</NavLink></li>
                    <li><NavLink to="/press" onClick={(e) => toggleNav(e)}>Press</NavLink></li>
                    <li><NavLink to="/contact" onClick={(e) => toggleNav(e)}>Contact</NavLink></li>
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