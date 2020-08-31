import React, { useState } from 'react'
import './Press.css'

export default function Press( {title="", link=""} ) {
    const [toggle, updateToggle] = useState(true)

    const clickHandler = (e) => {
        updateToggle(!toggle)

        const pressTitle = e.target
        const iframeContainer = e.target.nextElementSibling

        if (toggle) {
            pressTitle.classList.add('clicked')
            iframeContainer.classList.remove('hidden-iframe')
        }
        else {
            pressTitle.classList.remove('clicked')
            iframeContainer.classList.add('hidden-iframe');
        }
    }

    return(
        <div className="press-container">
            <p onClick={(e) => clickHandler(e)}>{title}</p>
            {link}
        </div>
    )
}

