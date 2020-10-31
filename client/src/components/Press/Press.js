import React, { useState, useEffect, useRef } from 'react'
import Fade from 'react-reveal/Fade';
import { useInView } from 'react-intersection-observer';

import './Press.css'

export default function Press( {title="", link=""} ) {
    const [toggle, updateToggle] = useState(false)
    const pressElement = useRef(null)
    
    const [ref, inView] = useInView({ rootMargin: '-50px' });


    useEffect(() => {
        let iFrameTimeout
        pressElement.current.classList.toggle('clicked', toggle)
        iFrameTimeout = setTimeout(() => {
            pressElement.current.nextElementSibling.classList.toggle('hidden-iframe', !toggle)
        }, 350)

        return () => {
            clearTimeout(iFrameTimeout)
        }
    }, [toggle])

    return(
        <Fade when={inView}>
            <div ref={ref} className="press-container">
                <p ref={pressElement} onClick={() => updateToggle(!toggle)}>{title}</p>
                {link}
            </div>
        </Fade>   
    )
}

