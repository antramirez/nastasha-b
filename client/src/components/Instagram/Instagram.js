import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJXTkNrM3VidnFXMFFMZAHhmLWRJdUM0OUpUNW1CbjEwTGRhMVE2dVZAPV0FtQnpVSXN5VFpDMFJHTno0azh5bm5iMVJRZA2dCangxTWxGbmk3VkQ3azhYbXE4WnFsTUpnVFY5VDZAxUk1TNkowT3I5bAZDZD',
            limit: 3
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}