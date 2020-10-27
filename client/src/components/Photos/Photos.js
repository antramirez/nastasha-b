import React, { useEffect } from 'react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
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
    useEffect(() => {
        document.title = 'Nastasha B. | Photos'
    })

    return(
        <div className="medium-container">
            <Bounce right>
                <h1>Photos</h1>
            </Bounce>

            <div className="square-photos-container">
                    <div className="landscape"><img src={photo4} alt=""/></div>
                    <div className="landscape"><img src={photo2} alt=""/></div>
                    <div className="landscape" id="id3"><img src={photo3} alt=""/></div>
                    <div className="portrait"><img src={photo8} alt=""/></div>
                    <div className="portrait"><img src={photo10} alt=""/></div>
                    <div className="portrait"><img src={photo5} alt=""/></div>
                    <div className="landscape"><img src={photo6} alt=""/></div>
                    <div className="landscape"><img src={photo7} alt=""/></div>
                    <div className="square"><img src={photo9} alt=""/></div>
                    <div className="square"><img src={photo} alt=""/></div>
            </div>              
        </div>
    )
}