import React,{useState,useEffect} from 'react';
import './App.css';
import Video from './Video';
import db from './fireconfig';

function App() {
  const [videos,setvideos] = useState([]);
  useEffect(()=>{
    db.collection("video").onSnapshot((snapshot) => setvideos(
            snapshot.docs.map((doc)=>doc.data())
        )
      );
  },[])
  return (
    <div className="app" >
      <div className="app_video">
        { videos.map(({url,channel,description,song,likes,messages,shares})=>
            (<Video key={likes}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />)
        ) }
      </div>
    </div>
  );
}

export default App;
