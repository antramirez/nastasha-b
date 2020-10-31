import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJYQVk4M3pCMlhVTW80eTNxZAHVGTDhfeENHNXRKT3pTYXB3RjJnS3pXMThIS0ZA5SUdSQ1lBQllwaEh0V1VvQ25hTjFYMGNsMEF6Y2l1d3JCUWdjQUR0MGRHdER5YmdqTEpfTkFDYjJmREhjbkRFMAZDZD', // change to real one
            limit: 3
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}