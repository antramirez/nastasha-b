import React, { useEffect } from 'react'
import Visual from '../Visual/Visual'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { useInView } from 'react-intersection-observer';
import specially from './../../Specially.MP4'
import about from './../../NATBBIO1.mp4'
import interludeGif from './Interlude.gif'
import speciallyGif from './Specially.gif'

export default function Visuals() {
    const [ref, inView] = useInView({ rootMargin: '-50px' });


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
                <div ref={ref} className="visuals-container">
                    <Fade when={inView}><Visual title={'The Interlude'} visSrc={'https://nastashab.s3.amazonaws.com/NATBBIO1.mp4'} gifSrc={'https://nastashab.s3.amazonaws.com/Interlude.gif'} spotify={'#'} apple={'#'} youtube={'#'} youtubeMusic={'#'} soundcloud={'#'} tidal={'#'} amazon={'#'} deezer={'#'}/></Fade>
                    <Fade bottom when={inView}><Visual title={'Specially'} visSrc={'https://nastashab.s3.amazonaws.com/Specially.MP4'} gifSrc={'https://nastashab.s3.amazonaws.com/Specially.gif'} spotify={'#'} apple={'#'} youtube={'#'} youtubeMusic={'#'} soundcloud={'#'} tidal={'#'} amazon={'#'} deezer={'#'}/></Fade>
                    <Fade bottom when={inView}><Visual title={'Behind the Scenes'} hasLinks={false} /></Fade>
                </div>
            </div>
        </>
    )
}