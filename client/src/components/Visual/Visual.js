import React, {useRef, useEffect, useState} from 'react'
import {isMobile} from 'react-device-detect';
import './Visual.css'

const Visual = ({title="", hasLinks=true, visSrc={}, gifSrc={}, spotify='#', apple='#', youtube='#', youtubeMusic='#', soundcloud='#', tidal='#', amazon='#', deezer=''}) => {
    
    const visContainerRef = useRef(null)
    const streamingServicesRef = useRef(null)
    const [useGif, setUseGif] = useState(false)

    useEffect(() => {
        const visVidContainer = visContainerRef.current
        const streamingServices = streamingServicesRef.current
        const visVid = visContainerRef.current.firstElementChild.firstElementChild
        let pauseTimeout, handleMouseOver, handleMouseLeave

        if (visVidContainer && visVid) {
            visVid.autoplay = false

            const tryVidPlay = () => {
                console.log(visVidContainer);
                const promise = visVid.play()
        
                if(promise.then) {
                    promise
                        .then(() => {
                            visVid.classList.remove('blur')
                            visVid.classList.add('no-blur')
                        })
                        .catch(() => {
                            console.log('err')
                            setUseGif(true)
                        })
                }
            }

            handleMouseOver = () => {
                tryVidPlay()
            }

            handleMouseLeave = () => {
                visVid.classList.remove('no-blur')
                visVid.classList.add('blur')
                pauseTimeout = setTimeout(() => visVid.pause(), 500)
            }
            
            if (!isMobile) {
                visVid.classList.add('blur')
                
                visVidContainer.addEventListener('mouseover', () => {
                    tryVidPlay()
                })
                visVidContainer.addEventListener('mouseleave', () => {
                    handleMouseLeave()
                })
            }
            else {
                visVid.autoplay = true
                tryVidPlay()

                if (streamingServices) {
                    streamingServices.style.opacity = 1
                }
            }
        }

        return () => {
            if (visVidContainer && visVid && !isMobile) {
                visVidContainer.removeEventListener('mouseover', () => handleMouseOver())
                visVidContainer.removeEventListener('mouseleave', () => handleMouseLeave())
                clearTimeout(pauseTimeout)
            }   
        }
    }, [])

    return (
        <div ref={visContainerRef} className={`visual-container ${useGif ? "gif-visual-container" : ""}`} style={{backgroundImage:` ${useGif ? 'url:'+gifSrc+'})' : ''} `}}>
            <div ref={visContainerRef} dangerouslySetInnerHTML={{
                __html:`
                 <video autoplay muted loop playsinline>
                     <source src=${visSrc} type="video/mp4" />
                 </video>
                `
             }} />
            <div className="visual-inner-container">
                <h2>{title}</h2>
                {hasLinks &&
                    <div className="streaming-services-container">
                        <ul ref={streamingServicesRef}>
                        <li><a href={spotify}>Spotify</a></li>
                            <li><a href={apple}>Apple Music</a></li>
                            <li><a href={youtube}>YouTube</a></li>
                            <li><a href={tidal}>Tidal</a></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Visual;