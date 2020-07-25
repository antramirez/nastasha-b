import React from 'react'
import './Photos.css'
import photo from '../../IMG_0153.jpeg'
import photo2 from '../../IMG_1302.jpeg'

export default function Photos() {
    return(
        <div className="medium-container">
        <h1>Photos</h1>
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