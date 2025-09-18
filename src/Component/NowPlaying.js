import { useSelector } from "react-redux";
import MoviesSuggestion from "./MoviesSuggestion";

const NowPlaying = () => {
  const NowPlayingMovies=useSelector(store=>store.movies?.nowPlayingMovies);
  if(NowPlayingMovies===null) return;

  return (
    <div className="relative z-10 md:-mt-[220px] -mt-[450px]">
        <MoviesSuggestion type="" movieData={NowPlayingMovies}/>
    </div>
    
  )
}

export default NowPlaying;