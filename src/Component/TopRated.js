import { useSelector } from "react-redux";
import MoviesSuggestion from "./MoviesSuggestion";

const TopRated = () => {
    const topratedMovies=useSelector(store=>store.movies?.toprated);
    if(topratedMovies===null) return;

  return (
    <div className="">
        <MoviesSuggestion type="Top Rated" movieData={topratedMovies}/>
    </div>
  )
}

export default TopRated;