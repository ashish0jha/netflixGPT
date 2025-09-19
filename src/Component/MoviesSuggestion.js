import { Link } from "react-router-dom";
import MoviesCard from "./MoviesCard";

const MoviesSuggestion = ({type,movieData}) => {
  if(!movieData) return;
  return (
    <div className="rounded-md md:ml-20 ml-2">
      <h1 className="font-bold text-2xl m-2 ml-0">{type}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {movieData.map((movie)=>{
            return (
              <Link key={movie.id} to={`/Browse/${movie.id}`}>
                  <MoviesCard poster_path={movie.poster_path} title={movie.title} id={movie.id} overveiw={movie.overview}/>
              </Link>
        )})}
      </div>
    
    </div>
  )
}

export default MoviesSuggestion;