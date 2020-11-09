import React, { useEffect, useRef } from 'react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
// import Reveal from 'react-reveal/Reveal';
import { useInView } from 'react-intersection-observer';
import './Photos.css'

export default function Photos() {
    const photoContainerRef = useRef(null)

    useEffect(() => {
        document.title = 'Nastasha B. | Photos'
    })

    const [ref, inView] = useInView({ rootMargin: '-50px' });

    const handlePhotoClick = (e) => {
        if (photoContainerRef.current) {
            const pic = photoContainerRef.current.lastChild.firstChild
            pic.src= e.target.src

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
            <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0020.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0021.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0022.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0023.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0003.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0002.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0007.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0009.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0004.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0005.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0006.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0008.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0010.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0011.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0012.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0013.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0014.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0015.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0016.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0017.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0018.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0024.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0025.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0026.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0027.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0028.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0029.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0030.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0031.JPG" alt=""/></div></Fade>
                <Fade  when={inView}><div className="landscape" id="id3"><img onClick={(e) => handlePhotoClick(e)} src="https://nastashab.s3.amazonaws.com/IMG_0032.JPG" alt=""/></div></Fade>
                

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