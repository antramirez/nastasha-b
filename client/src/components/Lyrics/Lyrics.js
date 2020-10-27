import React, { useEffect } from 'react'
import Bounce from 'react-reveal/Bounce';
import './Lyrics.css'
import interludeLyrics from './Interlude-lyrics.jpeg'

export default function Lyrics() {
    useEffect(() => {
        document.title = 'Nastasha B. | Lyrics'
    })
    
    return(
        <div className="medium-container">
            {/* <div className="heading-bar"></div> */}
            <Bounce right>
                <h1>Lyrics</h1>
            </Bounce>

            <div className="lyrics-container">
                <div id="song-1" className="lyrics-single-container">
                    <div className="song-title">
                        <h2>The Interlude</h2>
                    </div>
                    <div className="lyrics">
                        <div>
                            <p>
                            knew that <br/>
                            <br/>
                            it was too real<br/>
                            to stay <br/>
                            <br/>
                            knew it was the wrong call<br/>
                            before i even dialed your phone <br/>
                            maybe i set the pace <br/>
                            but you definitely checked my tone <br/>
                            going toe to toe <br/>
                            tryna make you break <br/>
                            didn’t realize all along <br/>
                            who was holding all the stakes<br/>
                            <br/>
                            cause I was free falling <br/>
                            started to be less cautious <br/>
                            with my moves <br/>
                            feelings still on lock<br/>
                            real guarded <br/>
                            so to you it was a phase of exhaustion <br/>
                            but if baby we a phase <br/>
                            I’m stuck regardless <br/>
                            <br/>
                            played it cool <br/>
                            but i knew that (knew that) <br/>
                            <br/>
                            mixed signals<br/>
                            time to make it clear (clear)<br/>
                            <br/>
                            I only wanted you (you) <br/>
                        </p>
                        </div>
                        <div>
                            <p>
                            played it cool <br/>
                            but i knew that (knew that) <br/>
                            <br/>
                            mixed signals<br/>
                            time to make it clear (clear)<br/>
                            <br/>
                            I only wanted you<br/>
                            <br/>
                            you<br/>
                            you<br/>
                            (you)<br/>
                            you <br/>
                            you <br/>
                            (you) <br/>
                            <br/>
                            don’t know how I feel <br/>
                            but I wrote this song <br/>
                            so I guess it’s safe to say <br/>
                            I’m still in the motions <br/>
                            of you <br/>
                            even if it’s wrong for me baby<br/>
                            i haven’t given into drunk thoughts lately <br/>
                            <br/>
                            wish you the best <br/>
                            even if it leaves me <br/>
                            in the worst way (worst way)<br/>
                            this was way overdue <br/>
                            even if you don’t call collect <br/>
                            to say <br/>
                            <br/>
                            I guess it’s not all love huh?
                        </p>
                        </div>
                        
                    </div>
                </div>

                <div id="song-2" className="lyrics-single-container" style={{top:'-50px'}}>
                    <div className="song-title">
                        <h2>Specially</h2>
                    </div>
                    <div className="lyrics">
                        <div>
                            <p>
                            yea, yea, yeah<br/>
                            ohhh<br/>
                            yea, yea, yeah<br/>
                            ohhh <br/>
                            <br/>
                            he treats me<br/>
                            so<br/>
                            he knows I’m<br/>
                            so<br/>
                            always treats me<br/>
                            so<br/>
                            so I ride for him specially<br/>
                            <br/>
                            he treats me<br/>
                            so<br/>
                            he knows I’m<br/>
                            so<br/>
                            so he treats me<br/>
                            so<br/>
                            and I ride for him specially<br/>
                            <br/>
                            when he pulls up on me<br/>
                            greets me just the perfect way <br/>
                            can always count on him <br/>
                            to brighten up my day, uh <br/>
                            and if homies ring him <br/>
                            when he’s with me <br/>
                            they know it’s a dub <br/>
                            cause his shawty time too<br/>
                            precious to him <br/>
                            oh ooh <br/>
                            so he ain’t leaving <br/>
                            no ohhh <br/>
                            he a g in the streets <br/>
                            but a sweetie for me <br/>
                            friendly nigga typa talk <br/>
                            that lingo he don’t speak <br/>
                        </p>
                        </div>
                        <div>
                            <p>
                            so I’m always down to ride<br/>
                            even when we’re not on sides <br/>
                            and I’m always down to stay, uh <br/>
                            <br/>
                            he treats me<br/>
                            so<br/>
                            he knows I’m <br/>
                            so <br/>
                            always treats me <br/>
                            so <br/>
                            so I ride for him specially <br/>
                            <br/>
                            he treats me<br/>
                            so <br/>
                            (wooh)<br/>
                            he knows I’m <br/>
                            so <br/>
                            so he treats me <br/>
                            so <br/>
                            and I ride for him specially <br/>
                            <br/>
                            spe, spe, spe, spe, spe, spe, spe, spe, specially<br/>
                            (uh, uh, uh, uh, uh, uhhh)<br/>
                            spe, spe, spe, spe, spe, spe, spe, spe, specially<br/>
                            (uh, uh, uh, uh, uh, uhhh)<br/>
                            <br/>
                            never knew love<br/>
                            before him<br/>
                            ain’t no other nigga <br/>
                            can compare <br/>
                            toward him <br/>
                            he’s my forever love<br/>
                            ain’t no abortin’<br/>
                        </p>
                        </div>
                        <div>
                            <p>
                            never knew love<br/>
                            before him<br/>
                            ain’t no other nigga <br/>
                            can compare <br/>
                            toward him <br/>
                            he’s my forever love<br/>
                            so there’s no abortin’<br/>
                            <br/>
                            he treats me<br/>
                            so<br/>
                            he knows I’m <br/>
                            so <br/>
                            always treats me <br/>
                            so <br/>
                            so I ride for him specially <br/>
                            <br/>
                            he treats me<br/>
                            so<br/>
                            he knows I’m <br/>
                            so <br/>
                            so treats me <br/>
                            so <br/>
                            so I ride for him specially
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="clear"></div>
            </div>        
        </div>
    )
}