import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import TopBrowse from "./TopBrowse";
import Secondrysection from "./Secondrysection";
import usePopularMovies from "../Hooks/usePopularMovies";
import useToprated from "../Hooks/useToprated";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useToprated();

  return (
    <div className="bg-black text-white">
      <Header/>
      <TopBrowse/>
      <Secondrysection/>
    </div>
  )
}

export default Browse;