import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJXUXh3ekRyZA3ZALYVdOVDV5NnhPSnNlM1NtTmZAQa09wVDU5Q0VzcnFHN2RHUE5VRnp0WGRqeE9wQy1Jck9uV1lEajdhcU1uM25UYnZAPX2FTRFVaMXhSNXlCQ0JuTUNiVG5lWW9B',
            limit: 3
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}
