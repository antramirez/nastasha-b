import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <>
            <div className="home-video-container">
                <video src=""></video>
            </div>

            <div className="home-container large-container">
                <div className="latest-single-container">
                    <h2>Latest Single Out</h2>
                </div>
                <div className="home-full-width-container">
                    <div className="home-full-width-inner-container">
                        <h2>Latest Visuals</h2>
                        <h4>See all visuals</h4>
                    </div>
                    

                </div>
                <div className="home-full-width-container">
                    <div className="home-full-width-inner-container">
                        <h2>Photos</h2>
                        <h4>See all photos</h4>
                    </div>
                </div>
                
                <div className="instagram-feed-container">
                    
                    
                </div>
            </div>
        </>
    )
}