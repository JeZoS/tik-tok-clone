import React,{useState} from 'react'
import "./videosidebar.css"
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function Videosidebar({ likes , shares , messages }) {
    const [liked,setliked] = useState(false)
    return (
        <div className="videosidebar">
           <div className="videosidebar_button">
               {
                    liked ? ( <FavoriteIcon fontSize="large"
                      onClick={(e)=>setliked(false)}
                    /> ) : ( <FavoriteBorderIcon fontSize="large"
                      onClick={(e)=>setliked(true)}
                    /> ) 
               }
                <p>{ liked ? likes+1 : likes }</p>
            </div> 
            <div className="videosidebar_button">
               <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div> 
            <div className="videosidebar_button">
               <ShareIcon fontSize="large" />
            <p>{shares}</p>
            </div> 
        </div>
    )
}

export default Videosidebar
