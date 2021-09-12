import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJVYUNYMnBTbTd4N1FGYU4xOWVoZAEtwbmx0ZA1k4TTBOOXpDWDNvdHFKOC1fSnZAPOGtlbW9pVDBOdzJmdG9uN1VXX3FLM3BaWHF3NWF3UFd2M2IwUzlmSTg3MEM4U25hZAW5wREtB',
            limit: 3
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}