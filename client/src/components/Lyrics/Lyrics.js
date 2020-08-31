import React, { useEffect } from 'react'
import Bounce from 'react-reveal/Bounce';
import './Lyrics.css'

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
                <div className="song-row">
                    <div className="song-col song-title-container">
                        <h2 className="song-title">SONG TITLE</h2>
                    </div>
                    <div className="song-col">
                        <p className="lyrics">
                            Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit.<br></br>
                            Donec quis enim mattis, fringilla ante at, <br></br>lacinia ex.
                            Donec id urna vel magna mattis fermentum.<br></br>
                            In tempus urna eleifend, gravida metus ac,<br></br> viverra massa.<br></br>
                            Quisque porta est a libero mattis, ac<br></br> rhoncus orci dignissim.<br></br>
                            Morbi eu mi imperdiet, vestibulum tellus ac,<br></br> eleifend velit.<br></br>
                            Donec bibendum risus sed risus placerat, eu semper enim dictum.<br></br>
                            Aliquam euismod sapien sagittis dignissim maximus.<br></br>
                            Donec ullamcorper ante quis feugiat gravida.<br></br>
                            Aliquam hendrerit nulla non nisl elementum,<br></br> viverra suscipit lacus pulvinar.<br></br>
                            Cras gravida sapien quis nisl blandit,<br></br> at dapibus sem malesuada.<br></br>
                            Cras et justo rhoncus, pretium diam in,<br></br> commodo lectus.<br></br>
                            Nullam dignissim enim a ultricies ornare.<br></br>

                        </p>
                    </div>
                </div>
                <div className="song-row">
                    <div className="song-col">
                        <p className="lyrics">
                            Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit.<br></br>
                            Donec quis enim mattis, fringilla ante at, <br></br>lacinia ex.
                            Donec id urna vel magna mattis fermentum.<br></br>
                            In tempus urna eleifend, gravida metus ac,<br></br> viverra massa.<br></br>
                            Quisque porta est a libero mattis, ac<br></br> rhoncus orci dignissim.<br></br>
                            Morbi eu mi imperdiet, vestibulum tellus ac,<br></br> eleifend velit.<br></br>
                            Donec bibendum risus sed risus placerat, eu semper enim dictum.<br></br>
                            Aliquam euismod sapien sagittis dignissim maximus.<br></br>
                            Donec ullamcorper ante quis feugiat gravida.<br></br>
                            Aliquam hendrerit nulla non nisl elementum,<br></br> viverra suscipit lacus pulvinar.<br></br>
                            Cras gravida sapien quis nisl blandit,<br></br> at dapibus sem malesuada.<br></br>
                            Cras et justo rhoncus, pretium diam in,<br></br> commodo lectus.<br></br>
                            Nullam dignissim enim a ultricies ornare.<br></br>
                        </p>
                    </div>
                    <div className="song-col song-title-container">
                        <h2 className="song-title">SONG TITLE</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}