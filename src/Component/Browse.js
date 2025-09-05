import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import TopBrowse from "./TopBrowse";
import SecondryUse from "./SecondryUse";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
    <Header/>
    <TopBrowse/>
    <SecondryUse/>
    </div>
  )
}

export default Browse;