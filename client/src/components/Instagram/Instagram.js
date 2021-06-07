import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJYN0RIVlU1ajhhUnRlMTR6X2pLdXl0dDNKSHlLbm1lelRBeGEzZA2pOZAFhMdjd5eTU0cnp4N21ONVQ1OExoa1NPdFdwQlQ1ZAFdGbzRnSHliN3N6bktyV1ZAtbUVqUGZAOdl9XVk1n',
            limit: 3
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}