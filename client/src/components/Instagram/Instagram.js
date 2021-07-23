import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJXVV9RUEIwVm4tVUU0RExZATXVqdHdULTJrcC1fU0RyZAkxsNjRhWk12cEI0bGk0S1A1bU9WT28xR3JQYUxINEQ2ZA3pFUW95VEkxNEJoZA0dkZAVlPaFZAvdzRZAQ2VvY0R6TjZAWQXpB',
            limit: 3
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}