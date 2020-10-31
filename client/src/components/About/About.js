import React, { useEffect } from 'react'
import FullScreenVideo from '../FullScreenVideo/FullScreenVideo'
import Bounce from 'react-reveal/Bounce';
import './About.css'
import aboutVideo from './../../NATBBIO1.mp4'

export default function About() {
    
    useEffect(() => {
        document.title = 'Nastasha B. | About'
        // ${window.location.pathname.split('/')[1].toTitleCase()

        let time
        let start
        let displayNone
        const header = document.querySelector('header')
        const footer = document.querySelector('footer')
        const aboutHeading = document.querySelector('.about-heading-container h1')

        footer.classList.remove('reg-footer')

        const hideContent = () => {
            header.classList.add('hidden-transition')
            footer.classList.add('hidden-transition')
            aboutHeading.classList.add('hidden-transition')
            aboutHeading.style.display = 'none'
            displayNone = setTimeout(() => {
                header.style.display = 'none'
            }, 400);
        }
        const resetTimer = () => {
            clearTimeout(time)
            header.style.display = 'block'
            header.classList.remove('hidden-transition')
            footer.classList.remove('hidden-transition')
            aboutHeading.classList.remove('hidden-transition')
            aboutHeading.style.display = 'block'
            time = setTimeout(hideContent, 2500)
        }

        start = setTimeout(hideContent, 1500)
        document.onmousemove = resetTimer;
        
        return () => {
            clearTimeout(time)
            clearTimeout(start)
            clearTimeout(displayNone)
            footer.classList.add('reg-footer')
            document.onmousemove = null;
        }
    })

    return(
        <>
            <div className="about-video-container">
                <FullScreenVideo vidSrc={aboutVideo} />
            </div>
            <div className="about-heading-container">
                <Bounce left>
                    <h1>About</h1>
                </Bounce>
            </div>  
        </>
    )
}