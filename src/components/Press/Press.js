import React, { useState } from 'react'
import './Press.css'

export default function Press( {title="", link=""} ) {

    const [toggle, updateToggle] = useState(true)

    const clickHandler = (e) => {
        updateToggle(!toggle)
        const iframeContainer = e.target.nextElementSibling
        toggle ? iframeContainer.classList.remove('hidden-iframe') : iframeContainer.classList.add('hidden-iframe')
    }

    return(
        <div className="press-container">
            <span>arrow</span>
            <p onClick={(e) => clickHandler(e)}>{title}</p>
            {link}
        </div>
    )
}

