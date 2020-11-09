import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJVcU9pRWxSWkdXQTB6cTVZALXYwTHhPay0xMFNSb0JrQWZApTUx0ZAHBBMmo5d0Qyb2VSM1dwSzRGSUhXZAjZA5VWxCbFJpT2JkTmFuWG1XOG80d3Q1X1NyeHJPbGhQdUxQZAVJFR2MxUVphSVNxekkyMwZDZD',
            limit: 3
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}