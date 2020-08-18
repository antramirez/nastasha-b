import React, { useEffect } from 'react'
import './Home.css'
import homeVid from './../../NastashaB_Viewing004_20200721.mp4'

export default function Home() {
    const body = document.querySelector('body')
    body.classList.add('no-scroll')
    //TODO: hide content under video until 'enter site' is clicked
    
    useEffect( () => {
        const gradualOpacity = setTimeout(() => {
            const enterSite = document.querySelector('.home-video-container h2')
            enterSite.style.opacity = 1;
        }, 3000)

        return function cleanup() {
            clearTimeout(gradualOpacity)
        }
    })

    const hideVideo = () => {
        // const video = document.querySelector('video')
        // video.pause()
        const vidContainer = document.querySelector('.home-video-container')
        setTimeout(() => {
            vidContainer.style.opacity = 0;
            body.classList.remove('no-scroll')
        }, 1000);
        setTimeout(() => {
            vidContainer.style.display = 'none'
        }, 3000);
    }

    return (
        <>
            <div className="home-video-container">
                <video autoPlay loop muted>
                    <source src={homeVid} type="video/mp4" />
                </video>
                <h2 onClick = { () => {
                    hideVideo()}}>Enter site</h2>
            </div>

            <div className="home-container large-container">
                <div className="latest-single-container">
                    <h2>Latest Single Out</h2>
                </div>
                <div className="home-full-width-container">
                    <div className="home-full-width-inner-container">
                        <h2>Latest Visuals</h2>
                        <h4><a href="/visuals">See all visuals</a></h4>
                    </div>
                </div>
                <div className="home-full-width-container">
                    <div className="home-full-width-inner-container">
                        <h2>Photos</h2>
                        <h4><a href="/photos">See all photos</a></h4>
                    </div>
                </div>
                
                <div className="instagram-feed-container">
                     
                </div>
            </div>
        </>
    )
}