import React, { useEffect } from 'react'
import Bounce from 'react-reveal/Bounce';
import Press from './../Press/Press'
import './PressPage.css'


export default function PressPage() {
    useEffect(() => {
        document.title = 'Nastasha B. | Press'
    })
    
    return(
    <div className="medium-container">
        <Bounce right>
            <h1>Press</h1>
        </Bounce>
        <ul className="press-list">
            <li>
                <Press title={`"Exclusive: Singer Nastasha B. Talks New Song ‘The Interlude’" - The Knockturnal`} link={"https://theknockturnal.com/exclusive-singer-nastasha-b-talks-new-song-the-interlude/"} />
            </li>
            <li>
                <Press title={`"Nastasha B. Discusses Latest Single 'Specially'" - things you haught to know`} link={"https://www.thingsyouhautetoknow.com/blog/8/29/19/NastashaB"} />
            </li>
        </ul>
    </div>
        
    )
}