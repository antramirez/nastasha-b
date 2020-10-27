import React, { useEffect } from 'react'
import Visual from '../Visual/Visual'
import Bounce from 'react-reveal/Bounce';
import specially from './../../Specially.MP4'
import about from './../../NATBBIO1.mp4'
import interludeGif from './Interlude.gif'
import speciallyGif from './Specially.gif'

export default function Visuals() {
    useEffect(() => {
        document.title = 'Nastasha B. | Visuals'
    })
    return(
        <>
            {/* <div className="medium-container">
                <Bounce right>
                    <h1>Visuals</h1>
                </Bounce>
            </div> */}
            <div className="large-container">
                <div className="visuals-container">
                    <Visual title={'The Interlude'} visSrc={about} gifSrc={interludeGif} spotify={'#'} apple={'#'} youtube={'#'} youtubeMusic={'#'} soundcloud={'#'} tidal={'#'} amazon={'#'} deezer={'#'}/>
                    <Visual title={'Specially'} visSrc={specially} gifSrc={speciallyGif} spotify={'#'} apple={'#'} youtube={'#'} youtubeMusic={'#'} soundcloud={'#'} tidal={'#'} amazon={'#'} deezer={'#'}/>
                    <Visual title={'Behind the Scenes'} hasLinks={false} />
                </div>
            </div>
        </>
    )
}