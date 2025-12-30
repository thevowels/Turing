'use client';

import {useEffect, useRef, useState} from "react";

function VideoPlayer({src, isPlaying}){
    const ref = useRef();
    useEffect(()=>{
        if(isPlaying)
        {
            ref.current.play();
        }else
            ref.current.pause       ();
    },[isPlaying])
    return(
        <>
            <video src={src} ref={ref} loop playsInline/>
        </>
    )
}

export default function WhyEffect() {
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = () => {
        setIsPlaying((isPlaying)=> !isPlaying);
    }
    return(
        <div>
            <button type={"button"} onClick={handlePlay}>{isPlaying ? 'pause':'play'}</button>
            <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={isPlaying}/>
        </div>
    );
}