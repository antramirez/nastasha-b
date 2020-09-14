import React, { useState, useEffect, useRef } from 'react'
import './Press.css'

export default function Press( {title="", link=""} ) {
    const [toggle, updateToggle] = useState(false)
    const pressElement = useRef(null)

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
        <div className="press-container">
            <p ref={pressElement} onClick={() => updateToggle(!toggle)}>{title}</p>
            {link}
        </div>
    )
}

