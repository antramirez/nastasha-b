import React from 'react'
import Fade from 'react-reveal/Fade';
import { useInView } from 'react-intersection-observer';

import './Press.css'

export default function Press( {title="", link=""} ) {
    const [ref, inView] = useInView({ rootMargin: '-50px' });

    return(
        <Fade when={inView}>
            <div ref={ref} className="press-container">
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
            </div>
        </Fade>   
    )
}

