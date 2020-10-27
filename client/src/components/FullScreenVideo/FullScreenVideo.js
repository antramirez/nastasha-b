import React, { useRef, useState, useEffect } from 'react'

export default function FullScreenVideo({vidSrc=''}) {
    const vidParentRef = useRef(null)

    useEffect(() => {
        const player = vidParentRef.current.firstElementChild
        let playerPromiseTimeout

        if (player) {
            player.autoplay = true
            player.controls = false
            player.playsinline = true
            player.muted = true
            player.setAttribute('muted', '')
            player.autobuffer = true

            playerPromiseTimeout = setTimeout(() => {
                const promise = player.play()

                if (promise.then) {
                    promise
                        .then(() => {console.log('playing')})
                        .catch((e) => {
                            console.log(e)
                            // vidParentRef.current.style.display = 'none'
                        })
                }
            }, 0)
        }

        return () => {
            clearTimeout(playerPromiseTimeout)
        }
    }, [])

    return (
        <div ref={vidParentRef} dangerouslySetInnerHTML={{
            __html:`
            <video class="full-screen-video" autoplay loop muted playsinline>
                <source src=${vidSrc} type="video/mp4" />
            </video>
            `
        }} />
    )
}


{/* <div style={{display:'block !important', background:'blue'}} ref={vidParentRef} dangerouslySetInnerHTML={{
    __html:`
        <video class="full-screen-video" autoPlay loop muted playsInline autobuffer>
            <source src=${vidSrc} type="video/mp4" />
        </video>
    `
}} /> */}

{/* <div ref={vidParentRef}>
    <video class="full-screen-video" autoPlay loop muted playsInline autobuffer>
        <source src={vidSrc} type="video/mp4" />
    </video>
</div> */}

