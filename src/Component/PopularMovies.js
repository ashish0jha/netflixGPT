import { useSelector } from "react-redux";
import usePopularMovies from "../Hooks/usePopularMovies";
import MoviesSuggestion from "./MoviesSuggestion";

const PopularMovies = () => {

    const PopularMovies=useSelector(store=>store.movies?.popularmovies);
    if(PopularMovies===null) return;

  return (
    <div className="">
        <MoviesSuggestion type="Popular" movieData={PopularMovies}/>
    </div>
  )
}

export default PopularMovies;