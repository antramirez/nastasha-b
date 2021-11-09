import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJVa0o4cGF3TXlaNHd2Smw5dkd6T0lpQjlOa1R2ZAG9PdHhUMWVvUFcwa2xFbHdfazltQklCakVudVhuY0x2QkhmN1NLMTJqZA3ZAZAZAEpoMFgxZA1NEdlU0am14enQ3XzRMTHZAXbG5B',
            limit: 3
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}
