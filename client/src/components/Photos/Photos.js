import React, { useEffect, useRef } from 'react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { useInView } from 'react-intersection-observer';
import './Photos.css'
// import photo from './IMG_0153.jpeg'
import photo from './resize.jpg'
import photo2 from './resize2.jpg'
// import photo2 from './IMG_1302.jpeg'
import photo3 from './IMG_0002.JPG'
import photo4 from './IMG_0003.JPG'
import photo5 from './IMG_0004.JPG'
import photo6 from './IMG_0005.JPG'
import photo7 from './IMG_0006.JPG'
import photo8 from './IMG_0007.JPG'
import photo9 from './IMG_0008.JPG'
import photo10 from './IMG_0009.JPG'
import photo11 from './Visuals-cover.jpeg'

export default function Photos() {
    const photoContainerRef = useRef(null)

    useEffect(() => {
        document.title = 'Nastasha B. | Photos'
    })

    const [ref, inView] = useInView({ rootMargin: '-50px' });

    const handlePhotoClick = (e) => {
        if (photoContainerRef.current) {
            const pic = photoContainerRef.current.lastChild.firstChild
            console.log(pic)
            console.log(e.target.src)

            pic.src= e.target.src
            console.log(pic)

            photoContainerRef.current.classList.remove('no-display')
        }
    }

    const handlePhotoClose = () => {
        if (photoContainerRef.current) {
            const pic = photoContainerRef.current.lastChild.firstChild
            photoContainerRef.current.classList.add('no-display')
            pic.src= null

        }
    }

    return(
        <>

        <div className="medium-container">
            <Bounce right>
                <h1>Photos</h1>
            </Bounce>

            <div ref={ref} className="square-photos-container">
                <Fade when={inView}><div className="landscape"><img onClick={(e) => handlePhotoClick(e)} src={photo4} alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape"><img onClick={(e) => handlePhotoClick(e)} src={photo2} alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src={photo3} alt=""/></div></Fade>
                <Fade bottom when={inView}><div className="portrait"><img onClick={(e) => handlePhotoClick(e)} src={photo8} alt=""/></div></Fade>
                <Fade bottom when={inView}><div className="portrait"><img onClick={(e) => handlePhotoClick(e)} src={photo10} alt=""/></div></Fade>
                <Fade bottom when={inView}><div className="portrait"><img onClick={(e) => handlePhotoClick(e)} src={photo5} alt=""/></div></Fade>
                <Fade bottom when={inView}><div className="landscape"><img onClick={(e) => handlePhotoClick(e)} src={photo6} alt=""/></div></Fade>
                <Fade bottom when={inView}><div className="landscape"><img onClick={(e) => handlePhotoClick(e)} src={photo7} alt=""/></div></Fade>
                <Fade bottom when={inView}><div className="square"><img onClick={(e) => handlePhotoClick(e)} src={photo9} alt=""/></div></Fade>
                <Fade bottom when={inView}><div className="square"><img onClick={(e) => handlePhotoClick(e)} src={photo} alt=""/></div></Fade>
            </div>              
            
        </div>

        <div ref={photoContainerRef} className="full-screen-photo-container no-display">
            <div className="photo-close-button" onClick={() => handlePhotoClose()}>
                <div className="photo-close-button-bar photo-bar-l-clicked"></div>
                <div className="photo-close-button-bar photo-bar-r-clicked"></div>
            </div>
            <div className="photo-img-container">
                <img src='' alt=""/>
            </div>
        </div>

        </>
    )
}