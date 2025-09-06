import { useSelector } from "react-redux";
import MoviesSuggestion from "./MoviesSuggestion";


const NowPlaying = () => {
  const NowPlayingMovies=useSelector(store=>store.movies?.nowPlayingMovies);
  if(NowPlayingMovies===null) return;

  return (
    <div className="absolute top-48 mt-72 ">
        <MoviesSuggestion type="" movieData={NowPlayingMovies}/>
    </div>
    
  )
}

export default NowPlaying;