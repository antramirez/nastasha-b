import React from 'react'
import './Footer.css'

import ig from '../../Instagram-Logo.png'
import twitter from '../../Twitter-Logo.png'
import youtube from '../../YouTube-Logo.png'
import spotify from '../../Spotify-Logo.png'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="copyright-container"><p>© 2020 by Management of Nastasha B.</p></div>
            <div className="social-icons-container">
                <ul>
                    <li><a href="www.google.com"><img src={ig} alt="Instagram Logo"/></a></li>
                    <li><a href="www.google.com"><img src={twitter} alt="Twitter Logo"/></a></li>
                    <li><a href="www.google.com"><img src={youtube} alt="Youtube Logo"/></a></li>
                    <li><a href="www.google.com"><img src={spotify} alt="Spotify Logo"/></a></li>
                </ul>
            </div>
        </footer>
    )
}