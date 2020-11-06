import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import { useInView } from 'react-intersection-observer';
import FullScreenVideo from '../FullScreenVideo/FullScreenVideo'
import Instagram from '../Instagram/Instagram'
import './Home.css'
import logo from './../NavMenu/NB-Logo.svg';
import homeVid from './../../homeVid.mp4'
// import homeVid from './../../NastashaB_Viewing004_20200721.mp4'
import visualsGif from './Visuals.gif'

export default function Home() {
    const [viewedVid, setViewedVid] = useState(false)
    const [ref, inView] = useInView({ rootMargin: '-50px' });


    useEffect(() => {
        document.title = 'Nastasha B.'
        document.querySelector('header').classList.add('hidden')

        const body = document.querySelector('body')
        body.classList.add('no-scroll')
        body.classList.add('home')

        if (sessionStorage.getItem('viewed_home')) {
            document.querySelector('.home-video-container').style.display = 'none'
            body.classList.remove('no-scroll')

            document.querySelector('header').classList.remove('hidden-transition')
            document.querySelector('header').classList.add('opaque-transition')

            document.querySelector('.home-container').classList.remove('hidden-transition')
            document.querySelector('.home-container').classList.add('opaque-transition')
        }

        const enterTimeout = setTimeout(() => {
            document.querySelector('.home-video-container .logo-container').classList.add('hidden-transition')
            // document.querySelector('.home-video-container h2').style.opacity = 1;
            document.querySelector('.home-video-container h2').classList.add('opaque-transition');

        }, 3000)

        return () => {
            clearTimeout(enterTimeout)
        }
    })

    useEffect( () => {
        const body = document.querySelector('body')
        const vidContainer = document.querySelector('.home-video-container')
        let noScrollTimeout, displayNoneTimeout


        if (viewedVid) {
            sessionStorage.setItem('viewed_home', true)
            
            noScrollTimeout = setTimeout(() => {
                vidContainer.style.opacity = 0;
                body.classList.remove('no-scroll')
                
            }, 1000);
            displayNoneTimeout = setTimeout(() => {
                vidContainer.style.display = 'none'
                document.querySelector('header').classList.remove('hidden-transition')
                document.querySelector('header').classList.add('opaque-transition')
                document.querySelector('.home-container').classList.remove('hidden-transition')
                document.querySelector('.home-container').classList.add('opaque-transition')
            }, 3000);
        }

        return () => {
            clearTimeout(noScrollTimeout)
            clearTimeout(displayNoneTimeout)
            document.querySelector('body').classList.remove('home')
        }
    },[viewedVid])

    return (
        <div ref={ref} className="home">
            <div className="home-video-container">
                <div className="logo-container">
                    <img src={'https://nastashab.s3.amazonaws.com/NB-Logo.svg'} alt=""/>
                </div>

                <FullScreenVideo vidSrc={'https://nastashab.s3.amazonaws.com/homeVid.mp4'}/>

                <h2 className="hidden" onClick = { () => {
                    setViewedVid(true)}}>Enter site</h2>
            </div>

            <div className="home-container large-container hidden">
                <Fade delay={500} duration={8000}>
                    <div className="latest-single-container">
                        <Fade bottom when={inView}>
                            <h2>Latest Single Out</h2>
                        </Fade>
                    </div>
                </Fade>
                <div className="medium-container home-latest-see-more">
                    <Fade delay={1200} when={inView}>
                        <h2>Latest Visuals</h2>
                    </Fade>

                    <Fade delay={1200} when={inView}>
                        <div className="latest-vis-container" id="latest-vis-container">
                            <img src={'https://nastashab.s3.amazonaws.com/Visuals.gif'} alt=""/>
                            <h3><a href="https://www.youtube.com" target="_blank">Watch Now</a></h3>
                        </div>
                    </Fade>
                    <Fade bottom when={inView}>
                        <h4><a href="/visuals">See all visuals</a></h4>
                    </Fade>
                </div>

                <div className="medium-container home-latest-see-more">
                    <Fade bottom when={inView}>
                        <h2>Latest Photos</h2>
                    </Fade>
                    <Fade bottom when={inView}>
                        <Instagram />
                    </Fade>
                    <Fade bottom when={inView}>
                        <h4><a href="/photos">See all photos</a></h4>
                    </Fade>

                </div>
            </div>
        </div>
    )
}