import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import VideoTitle from "./VideoTitle";

const TopBrowse = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    console.log("rxtfcgvhjf",movies);
    if(!movies) return;

    const mainmovies=movies[0];

    const {original_title,overview}=mainmovies;

    return (
        <div>
            <VideoBG/>
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    )
}

export default TopBrowse;