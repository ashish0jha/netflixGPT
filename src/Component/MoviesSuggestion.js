import MoviesCard from "./MoviesCard";

const MoviesSuggestion = ({type,movieData}) => {
  if(!movieData) return;
  return (
    <div className="rounded-md ml-20">
      <h1 className="font-bold text-2xl m-2 ml-0">{type}</h1>
      <div className="flex overflow-auto scrollbar-hide">
        {movieData.map((movie)=>{
            return <MoviesCard key={movie.id} poster_path={movie.poster_path} title={movie.title}/>
        })}
      </div>
    
    </div>
  )
}

export default MoviesSuggestion;