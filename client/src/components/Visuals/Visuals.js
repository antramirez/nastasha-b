import React, { useEffect } from 'react'
import Visual from '../Visual/Visual'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { useInView } from 'react-intersection-observer';

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
                    <Fade when={inView}><Visual title={'The Interlude'} visSrc={'https://nastashab.s3.amazonaws.com/NATBBIO1.mp4'} gifSrc={'https://nastashab.s3.amazonaws.com/Interlude.gif'} spotify={'https://open.spotify.com/track/5oC1t0w4Cs1MfI5Rkfka13?si=wAFcKtH4QHmp6KfZev9e-A'} apple={'https://music.apple.com/us/album/the-interlude-single/1537600083'} youtube={'https://www.youtube.com/watch?v=8dtq4-roxGw'} tidal={'https://tidal.com/track/159970904'}/></Fade>
                    <Fade bottom when={inView}><Visual title={'Specially'} visSrc={'https://nastashab.s3.amazonaws.com/Specially.MP4'} gifSrc={'https://nastashab.s3.amazonaws.com/Specially.gif'} spotify={'https://open.spotify.com/track/225m7SjB3b4oNWKE7pnVsL?si=hAPgPp2ORfqeCb4pLH5Y4Q'} apple={'https://music.apple.com/us/album/specially/1474795543?i=1474795657'} youtube={'https://www.youtube.com/watch?v=TlkROUtNQYc'} tidal={'https://tidal.com/track/114396775'}/></Fade>
                    <Fade bottom when={inView}><Visual title={'Monica'} visSrc={'https://nastashab.s3.amazonaws.com/Monica.MP4'} gifSrc={'https://nastashab.s3.amazonaws.com/nbmo.gif'} hasLinks={false}/></Fade>
                    <Fade bottom when={inView}><Visual title={'Interlude BTS'} visSrc={'https://nastashab.s3.amazonaws.com/InterludeBTS.mp4'} gifSrc={'https://nastashab.s3.amazonaws.com/interlude60.gif'} hasLinks={false} /></Fade>
                    <Fade bottom when={inView}><Visual title={'Monica BTS'} visSrc={'https://nastashab.s3.amazonaws.com/MonicaBTS.mp4'} gifSrc={'https://nastashab.s3.amazonaws.com/MonicaBTS.gif'} hasLinks={false} /></Fade>
                </div>
            </div>
        </>
    )
}