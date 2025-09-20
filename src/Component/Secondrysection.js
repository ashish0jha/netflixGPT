import PopularMovies from "./PopularMovies"
import TopRated from "./TopRated"
import UpcomingMovies from "./UpcomingMovies"

const Secondrysection = () => {
  return (
    <div className="mt-10 bg-black bg-opacity-50">
        <PopularMovies/>
        <TopRated/>
        <UpcomingMovies/>
    </div>
  )
}

export default Secondrysection;