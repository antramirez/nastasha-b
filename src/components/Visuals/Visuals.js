import React from 'react'
import './Visuals.css'

export default function Visuals() {
    return(
        <div className="large-container">
            <h1>Visuals</h1>
            <div className="visuals-container">
                <div className="visual-container">
                    <h2 className="visual-title">Title of Visual</h2>
                    <video src=""></video>
                </div>
                <div className="visual-container">
                    <h2 className="visual-title">Title of Visual</h2>
                    <video src=""></video>
                </div>
            </div>
        </div>
    )
}