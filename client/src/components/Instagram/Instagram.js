import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJWOXVQSzA0bUg2T0pmLVBMbTV6QzdmUnlubWplTW1LRll3QVRfRlRKZA2VmU3B2dnJQM09nOG1zMkV0QVhLSHh1WnZA0OVkwWEFhN1M5UHBTTEpCN3cwVTFxS29BVjFOeGFQRFVn',
            limit: 3
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}
