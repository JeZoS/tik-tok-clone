import React,{ useRef, useState} from 'react'
import './video.css'
import VideoFooter from "./VideoFooter"
import Videosidebar from "./Videosidebar"

function Video({url,channel,description,song,likes,messages,shares}) {
    const [play,setPlay] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (play){
            videoRef.current.play();
            setPlay(false);
        } else {
            videoRef.current.pause();
            setPlay(true); 
        }
    }
    return (
        <div className="video">
            <video 
                className="video_player" 
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}  
            ></video>
            <VideoFooter channel={channel} description={description} song={song} />
            <Videosidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
