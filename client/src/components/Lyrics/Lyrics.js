import React, { useEffect } from 'react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { useInView } from 'react-intersection-observer';
import './Lyrics.css'
import interludeLyrics from './Interlude-lyrics.jpeg'



export default function Lyrics() {
    const [ref, inView] = useInView({ rootMargin: '-50px' });


    useEffect(() => {
        document.title = 'Nastasha B. | Lyrics'
    })
    
    return(
        <div className="medium-container">
            {/* <div className="heading-bar"></div> */}
            <Bounce right>
                <h1>Lyrics</h1>
            </Bounce>

            <div ref={ref}className="lyrics-container">
                <Fade when={inView}>
                <div id="song-1" className="lyrics-single-container">
                <Fade top when={inView}>
                    <div className="song-title">
                        <h2>The Interlude</h2>
                    </div>
                </Fade>
                    <div className="lyrics">
                        <div>
                            <p>
                            <Fade duration={4000} bottom when={inView}><span>knew that</span></Fade>
                            <br/>
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>knew that</span></Fade>
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>it was too real</span></Fade>
                            <br/>
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>knew it was the wrong call</span><br/></Fade>
                            <Fade duration={4000} bottom when={inView}><span>before i even dialed your phone <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>maybe i set the pace <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>but you definitely checked my tone <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>going toe to toe <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>tryna make you break <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>didn’t realize all along <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>who was holding all the stakes<br/></span></Fade>
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>cause I was free falling <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>started to be less cautious <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>with my moves <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>feelings still on lock<br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>real guarded <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>so to you it was a phase of exhaustion <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>but if baby we a phase <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>I’m stuck regardless <br/></span></Fade>
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>played it cool <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>but i knew that (knew that) <br/></span></Fade>
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>mixed signals<br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>time to make it clear (clear)<br/></span></Fade>
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>I only wanted you (you)<br/></span></Fade>
                        </p>
                        </div>
                        <div>
                            <p>
                            <Fade duration={4000} bottom when={inView}><span>played it cool <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>but i knew that (knew that) <br/></span></Fade>
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>mixed signals<br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>time to make it clear (clear)<br/></span></Fade>                            
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>I only wanted you<br/></span></Fade>                            
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>you<br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>you<br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>(you)<br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>you<br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>you<br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>(you)<br/></span></Fade>  
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>but I wrote this song <br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>so I guess it’s safe to say <br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>I’m still in the motions <br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>don’t know how I feel <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>of you<br/></span></Fade>  
                            <Fade duration={4000} bottom when={inView}><span>even if it’s wrong for me baby<br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>i haven’t given into drunk thoughts lately <br/></span></Fade>   
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>wish you the best <br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>even if it leaves me <br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>in the worst way (worst way)<br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>this was way overdue <br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>even if you don’t call collect <br/></span></Fade>   
                            <Fade duration={4000} bottom when={inView}><span>to say <br/></span></Fade>  
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>I guess it’s not all love huh?</span></Fade>  
                        </p>
                        </div>
                        
                    </div>
                </div>
                </Fade>
                <Fade when={inView}>
                <div id="song-2" className="lyrics-single-container" style={{top:'-50px'}}>
                <Fade bottom when={inView}>
                    <div className="song-title">
                        <h2>Specially</h2>
                    </div>
                </Fade>
                    <div className="lyrics">
                        <div>
                            <p>
                            <Fade duration={4000} bottom when={inView}><span>yea, yea, yeah<br/></span></Fade>  
                            <Fade duration={4000} bottom when={inView}><span>ohhh <br/></span></Fade>  
                            <Fade duration={4000} bottom when={inView}><span>yea, yea, yeah<br/></span></Fade>  
                            <Fade duration={4000} bottom when={inView}><span>ohhh <br/></span></Fade> 
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>he treats me <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>he knows I’m<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>always treats me<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so I ride for him specially<br/></span></Fade> 
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>he treats me <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>he knows I’m<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>always treats me<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so I ride for him specially<br/></span></Fade> 
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>when he pulls up on me<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>greets me just the perfect way <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>can always count on him <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>to brighten up my day, uh <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>and if homies ring him <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>when he’s with me <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>they know it’s a dub <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>cause his shawty time too<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>precious to him <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>oh ooh <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so he ain’t leaving <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>no ohhh <br/></span></Fade> 
                            
                            <Fade duration={4000} bottom when={inView}><span>he a g in the streets <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>but a sweetie for me <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>friendly nigga typa talk <br/></span></Fade>
                            <Fade duration={4000} bottom when={inView}><span>that lingo he don’t speak <br/></span></Fade>
                        </p>
                        </div>
                        <div>
                            <p>
                            <Fade duration={4000} bottom when={inView}><span>so I’m always down to ride<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>even when we’re not on sides <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>and I’m always down to stay, uh <br/></span></Fade>
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>he treats me <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>he knows I’m<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>always treats me<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so I ride for him specially<br/></span></Fade> 
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>he treats me <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>(wooh)<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>he knows I’m<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>always treats me<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so I ride for him specially<br/></span></Fade> 
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>spe, spe, spe, spe, spe, spe, spe, spe, specially<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>(uh, uh, uh, uh, uh, uhhh)<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>spe, spe, spe, spe, spe, spe, spe, spe, specially<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>(uh, uh, uh, uh, uh, uhhh)<br/></span></Fade> 
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>never knew love<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>before him<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>ain’t no other nigga <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>can compare <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>toward him <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>he’s my forever love<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>ain’t no abortin’<br/></span></Fade> 
                        </p>
                        </div>
                        <div>
                            <p>
                            <Fade duration={4000} bottom when={inView}><span>never knew love<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>before him<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>ain’t no other nigga <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>can compare <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>toward him <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>he’s my forever love<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>ain’t no abortin’<br/></span></Fade> 
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>he treats me <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>he knows I’m<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>always treats me<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so I ride for him specially<br/></span></Fade> 
                            <br/>
                            <Fade duration={4000} bottom when={inView}><span>he treats me <br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>he knows I’m<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>always treats me<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so<br/></span></Fade> 
                            <Fade duration={4000} bottom when={inView}><span>so I ride for him specially<br/></span></Fade> 
                            </p>
                        </div>
                        
                    </div>
                </div>
                </Fade>
                <div className="clear"></div>
            </div>        
        </div>
    )
}