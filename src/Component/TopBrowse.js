import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import VideoTitle from "./VideoTitle";
import NowPlaying from "./NowPlaying";

const TopBrowse = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    
    if(!movies) return;

    const randomIndex=Math.floor(Math.random()*movies.length)
    
    const mainmovies=movies[randomIndex];

    const {original_title,overview,id}=mainmovies;

    return (
        <div>
            <VideoBG id={id}/>
            <VideoTitle title={original_title} overview={overview}/>
            <NowPlaying/>
        </div>
    )
}

export default TopBrowse;