import React from 'react'
import './Footer.css'

import ig from '../../Instagram-Logo.png'
import apple from '../../Apple-Logo.png'
import youtube from '../../YouTube-Logo.png'
import spotify from '../../Spotify-Logo.png'

export default function Footer() {
    return(
        <footer className="reg-footer">
            <div className="social-icons-container">
                <ul>
                    <li><a href="https://instagram.com/nastasha.b"><img src={ig} alt="Instagram Logo"/></a></li>
                    <li><a href="https://www.youtube.com/channel/UCtNIlIpRq75lSbx5xxIfbsg"><img src={youtube} alt="Youtube Logo"/></a></li>
                    <li><a href="https://open.spotify.com/artist/4fztShYL8ObP3FFgyWPQ9w?si=-XwAG7TOSlyN5u6LxgH1ZQ"><img src={spotify} alt="Spotify Logo"/></a></li>
                    <li><a href="https://music.apple.com/us/artist/nastasha-b/1442371372"><img src={apple} alt="Apple Music Logo"/></a></li>
                </ul>
            </div>
            <div className="copyright-container"><p>© 2020 by Management of Nastasha B.</p></div>
        </footer>
    )
}