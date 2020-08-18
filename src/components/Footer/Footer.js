import React from 'react'
import './Footer.css'

import ig from '../../Instagram-Logo.png'
// import appleMusic from '../../Apple-Music-Logo.png'
import youtube from '../../YouTube-Logo.png'
import spotify from '../../Spotify-Logo.png'

export default function Footer() {
    return(
        <footer className="reg-footer">
            <div className="social-icons-container">
                <ul>
                    <li><a href="www.google.com"><img src={ig} alt="Instagram Logo"/></a></li>
                    <li><a href="www.google.com"><img src={youtube} alt="Youtube Logo"/></a></li>
                    <li><a href="www.google.com"><img src={spotify} alt="Spotify Logo"/></a></li>
                    {/* <li><a href="www.google.com"><img src={appleMusic} alt="Apple Music Logo"/></a></li> */}
                </ul>
            </div>
            <div className="copyright-container"><p>© 2020 by Management of Nastasha B.</p></div>
        </footer>
    )
}