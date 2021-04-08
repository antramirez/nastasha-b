import React, { useEffect } from 'react'
import Instafeed from './instafeed'

export default function Instagram() {
    useEffect(() => {
        var feed = new Instafeed({
            accessToken: 'IGQVJWX2JpSlJERjZAyZAGs2VW1fNEdfZAFFRZAlBtQkFkb19HWTVrN1hkVjhFOVg0bnJPTXdFWnl4MWI5c19pRXhqQ0d5LVJvdnM5OTdnTGQ5WE9iN01la1dVUmNlOVliMF9wdW9oUXg1cUlmaWQxZAUpJbQZDZD',
            limit: 3
        })
        feed.run();
    })
    
    return (
       <div id="instafeed"></div>
    )
}