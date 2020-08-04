import React, { useEffect } from 'react'
import './About.css'
import aboutVideo from './../../NATBBIO1.mp4'

export default function About() {
    
    useEffect(() => {
        let time
        let start
        const header = document.querySelector('header')
        const footer = document.querySelector('footer')
        const aboutHeading = document.querySelector('.about-heading')

        const hideContent = () => {
            header.classList.add('hidden')
            footer.classList.add('hidden')
            aboutHeading.classList.add('hidden')
        }
        const resetTimer = () => {
            clearTimeout(time)
            header.classList.remove('hidden')
            footer.classList.remove('hidden')
            aboutHeading.classList.remove('hidden')
            time = setTimeout(hideContent, 2500)
        }

        start = setTimeout(hideContent, 800)
        document.onmousemove = resetTimer;
        
        return function cleanup() {
            clearTimeout(time)
            clearTimeout(start)
            document.onmousemove = null;
        }
    })

    return(
        <>
            <div className="about-video-container">
                <video autoPlay loop muted playsInline>
                    <source src={aboutVideo} type="video/mp4" />
                </video>
            </div>

            {/* <div className="medium-container"> */}
                <h1 className="about-heading">About</h1>
            {/* </div> */}
        </>
    )
}