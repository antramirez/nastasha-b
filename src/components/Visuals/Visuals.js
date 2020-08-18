import React, { useEffect } from 'react'
import './Visuals.css'
import specially from './../../Specially.MP4'
import about from './../../NATBBIO1.mp4'

export default function Visuals() {


    useEffect(() => {
        const vidContainers = document.querySelectorAll('.visuals-container .home-full-width-container')

        vidContainers.forEach(v => {
            if (v.firstElementChild) {
                v.addEventListener('mouseover', () => v.firstElementChild.play())
                v.addEventListener('mouseleave', () => v.firstElementChild.pause())
            }
        })
            
        return () => {
            vidContainers.forEach(v => {
                if (v.firstElementChild) {
                    v.removeEventListener('mouseover', () => v.firstElementChild.play())
                    v.removeEventListener('mouseleave', () => v.firstElementChild.pause())
                }
            })
        }
    })
    return(
        <>
            <div className="medium-container">
                <div className="heading-bar"></div>
                <h1>Visuals</h1>
            </div>
            <div className="large-container">
                <div className="visuals-container">
                <div className="home-full-width-container">
                        <video id="specially-video" src={specially} muted loop></video>
                        <div className="home-full-width-inner-container">
                            <h2>The Interlude</h2><div className="streaming-services-container">
                                <ul>
                                    <li><a href="#">Spotify</a></li>
                                    <li><a href="#">Apple Music</a></li>
                                    <li><a href="#">YouTube</a></li>
                                    <li><a href="#">YouTube Music</a></li>
                                    <li><a href="#">SoundCloud</a></li>
                                    <li><a href="#">Tidal</a></li>
                                    <li><a href="#">Amazon</a></li>
                                    <li><a href="#">Deezer</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="home-full-width-container">
                        <video id="specially-video" src={about} muted loop></video>
                        <div className="home-full-width-inner-container">
                            <h2>Specially</h2><div className="streaming-services-container">
                                <ul>
                                    <li><a href="#">Spotify</a></li>
                                    <li><a href="#">Apple Music</a></li>
                                    <li><a href="#">YouTube</a></li>
                                    <li><a href="#">YouTube Music</a></li>
                                    <li><a href="#">SoundCloud</a></li>
                                    <li><a href="#">Tidal</a></li>
                                    <li><a href="#">Amazon</a></li>
                                    <li><a href="#">Deezer</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="home-full-width-container">
                        <video src=""></video>
                        <div className="home-full-width-inner-container">
                            <h2>Behind the Scenes</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}