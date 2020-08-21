import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJXdzV5ZA1VGNWczZAU9MbnN4UVpoUFZAsRkVGTXdiT1c1V2otYVAwNmZAnSmcwTXVWbV9OX0QzdVdJcU00MzdRc1pTU05SMXlNeXM3R3ZAQTjJQcFhNR1ltalowTkxtTTZA6Y1VicjlDUWZAmc25CVXByMAZDZD',
            limit: 6
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}