import React, { useEffect } from 'react'
import Bounce from 'react-reveal/Bounce';
import './Photos.css'
import photo from './IMG_0153.jpeg'
import photo2 from './IMG_1302.jpeg'

export default function Photos() {
    useEffect(() => {
        document.title = 'Nastasha B. | Photos'
    })

    return(
        <div className="medium-container">
            {/* <div className="heading-bar"></div> */}
            <Bounce right>
                <h1>Photos</h1>
            </Bounce>
            <div className="photos-container">
                <div className="photo-col photo-left-col">
                    <img src={photo} alt=""/>
                    <img src={photo2} alt=""/>
                </div>
                <div className="photo-col photo-right-col">
                    <img src={photo2} alt=""/>
                    <img src={photo} alt=""/>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    )
}