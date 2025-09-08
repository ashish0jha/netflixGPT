import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import TopBrowse from "./TopBrowse";
import Secondrysection from "./Secondrysection";
import usePopularMovies from "../Hooks/usePopularMovies";
import useToprated from "../Hooks/useToprated";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useToprated();
  useUpcomingMovies();

  const showGptPage=useSelector((store)=>store.States.GptPagebtn)

  return (
    <div className="bg-black text-white">
      <Header/>
      {
        showGptPage 
        ? <GptSearchPage/> 
        : <>
          <TopBrowse/>
          <Secondrysection/>
        </>

      }
      
      
    </div>
  )
}

export default Browse;