import { useSelector } from "react-redux";
import MoviesSuggestion from "./MoviesSuggestion";

const UpcomingMovies = () => {
    const upcomingMovies=useSelector(store=>store.movies?.upcomingMovies);
    if(upcomingMovies===null) return;

  return (
    <div className="">
        <MoviesSuggestion type="Upcoming" movieData={upcomingMovies}/>
    </div>
  )
}

export default UpcomingMovies;