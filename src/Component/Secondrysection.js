import MoviesSuggestion from "./MoviesSuggestion"
import PopularMovies from "./PopularMovies"
import TopRated from "./TopRated"

const Secondrysection = () => {
  return (
    <div className="my-10">
        <MoviesSuggestion type="Trending"/>
        <PopularMovies/>
        <TopRated/>
        <MoviesSuggestion type="Technology"/>
        <MoviesSuggestion type="Ashish"/>
        <MoviesSuggestion type="Ojha"/>
    </div>
  )
}

export default Secondrysection