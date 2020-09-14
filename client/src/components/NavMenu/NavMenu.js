import React, { useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import './NavMenu.css'
import logo from './NB-Logo.svg';

export default function NavMenu() {
    const [toggle, updateToggle] = useState(false);

    // effect to take place first time after render
    useEffect(() => {
        //TODO: remove hidden class from header if it carries over from about page (may have to do on every page)

        const handleResize = () => {
            if (window.innerWidth > 900) {
                if (document.querySelector('nav .nav-menu-container').classList.contains('mobile-menu-visible')) {
                    document.querySelector('nav .nav-menu-container').classList.remove('mobile-menu-visible')
                    updateToggle(!toggle)
                }        
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    // effect to handle toggle
    useEffect(() => {
        const navButtonTop = document.querySelector('.nav-menu-button').firstElementChild
        const navButtonBottom = document.querySelector('.nav-menu-button').lastElementChild
        const navMenuContainer = document.querySelector('.logo-container').nextElementSibling
        let transitionTimer

        navButtonTop.classList.toggle('top-bar-clicked', toggle)
        navButtonBottom.classList.toggle('bottom-bar-clicked', toggle)

        if (!toggle) {
            if (window.innerWidth <= 900) {
                // set transition to hide/remove mobile menu and prevent transition when normal menu is visible
                navMenuContainer.style.transition = '.3s all ease-in-out .2s'
                transitionTimer = setTimeout(() => {
                    // remove transition depending on browser compatibility
                    (navMenuContainer.style.removeProperty) ? navMenuContainer.style.removeProperty('transition') : navMenuContainer.style.removeAttribute('transition');
                }, 500)
            }
        }
        
        navMenuContainer.classList.toggle('mobile-menu-visible', toggle)

        return () => {
            clearTimeout(transitionTimer)
        }
    }, [toggle])

    const handleClick = (e, homeLinkClicked=false) => {
        const notAlreadyHome = window.location.pathname !== '' && window.location.pathname !== '/'

        if (toggle) {
            updateToggle(!toggle)
        }
        // if home link clicked from page other than home, or if click on other page link that isn't current page path, scroll
        if ((homeLinkClicked && notAlreadyHome) || (!homeLinkClicked && `/${e.target.text.toLowerCase()}` !== window.location.pathname.toLowerCase())) {
            window.scrollTo(0,0)
        }
    }

    return(
        <header>
            <nav>
                <div className="logo-container">
                    <NavLink to="/" onClick={(e) => handleClick(e, true)}><img src={logo} alt="N.B." /></NavLink>
                </div>
                <div className="nav-menu-container">
                <ul>
                    <li><NavLink to="/about" onClick={(e) => handleClick(e)}>About</NavLink></li>
                    <li><NavLink to="/visuals" onClick={(e) => handleClick(e)}>Visuals</NavLink></li>
                    <li><NavLink to="/photos" onClick={(e) => handleClick(e)}>Photos</NavLink></li>
                    <li><NavLink to="/lyrics" onClick={(e) => handleClick(e)}>Lyrics</NavLink></li>
                    <li><NavLink to="/press" onClick={(e) => handleClick(e)}>Press</NavLink></li>
                    <li><NavLink to="/contact" onClick={(e) => handleClick(e)}>Contact</NavLink></li>
                </ul>
                </div>
                <div className="nav-menu-button" onClick={(e) => updateToggle(!toggle)}>
                    <div className="bar top-bar" id="top-bar"></div>
                    <div className="bar bottom-bar" id="bottom-bar"></div>
                </div>
            </nav>
        </header>
    )
}