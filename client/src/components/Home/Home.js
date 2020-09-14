import React, { useEffect, useState } from 'react'
import Instagram from '../Instagram/Instagram'
import './Home.css'
import homeVid from './../../NastashaB_Viewing004_20200721.mp4'
import latestVisual from './Latest-Single.PNG'
import latestPhoto from './IMG_0153.jpeg'

export default function Home() {
    const [viewedVid, setViewedVid] = useState(false)

    useEffect(() => {
        document.title = 'Nastasha B.'

        const body = document.querySelector('body')
        body.classList.add('no-scroll')
        body.classList.add('home')

        if (sessionStorage.getItem('viewed_home')) {
            document.querySelector('.home-video-container').style.display = 'none'
            body.classList.remove('no-scroll')
        }

        const enterTimeout = setTimeout(() => {
            document.querySelector('.home-video-container h2').style.opacity = 1;
        }, 3000)

        return () => {
            clearTimeout(enterTimeout)
        }
    })

    useEffect( () => {
        const body = document.querySelector('body')
        const vidContainer = document.querySelector('.home-video-container')
        let noScrollTimeout, displayNoneTimeout

        //TODO: hide content under video until 'enter site' is clicked

        if (viewedVid) {
            sessionStorage.setItem('viewed_home', true)
            noScrollTimeout = setTimeout(() => {
                vidContainer.style.opacity = 0;
                body.classList.remove('no-scroll')
            }, 1000);
            displayNoneTimeout = setTimeout(() => {
                vidContainer.style.display = 'none'
            }, 3000);
        }

        return () => {
            clearTimeout(noScrollTimeout)
            clearTimeout(displayNoneTimeout)
            document.querySelector('body').classList.remove('home')
        }
    },[viewedVid])

    return (
        <>
            <div className="home-video-container">
                <video autoPlay loop muted playsInline autobuffer>
                    <source src={homeVid} type="video/mp4" />
                </video>
                <h2 onClick = { () => {
                    setViewedVid(true)}}>Enter site</h2>
            </div>

            <div className="home-container large-container">
                <div className="latest-single-container">
                    <h2>Latest Single Out</h2>
                </div>
                <div className="home-full-width-container">
                    <div className="home-full-width-inner-container" style={{backgroundImage:`url(${latestVisual})`, backgroundSize:'cover'}}>
                        <h2>Latest Visuals</h2>
                        <h4><a href="/visuals">See all visuals</a></h4>
                    </div>
                </div>
                <div className="home-full-width-container" style={{marginBottom:'50px'}}>
                    <div className="home-full-width-inner-container" style={{backgroundImage:`url(${latestPhoto})`, backgroundSize:'cover'}}>
                        <h2>Photos</h2>
                        <h4><a href="/photos">See all photos</a></h4>
                    </div>
                </div>
                <div className="medium-container">
                     <Instagram />
                     <div id="ig-link-container">
                        <h4><a href="https://instagram.com/nastasha.b">See more on Instagram</a></h4>

                     </div>
                </div>
            </div>
        </>
    )
}