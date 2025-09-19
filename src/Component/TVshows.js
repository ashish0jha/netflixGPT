import { BG_Page } from "../utils/constants";
import Header from "./Header";
import PopularMovies from "./PopularMovies";
import PopularTVshows from "./PopularTVshows";

const TVshows = () => {
  return (
    <div>
        <Header/>
        <div className="absolute -z-10">
            <img
            src={BG_Page} 
            alt="bg"
            className="h-screen object-cover md:h-auto brightness-[20%]"
            />
        </div>
        <PopularTVshows/>
    </div>
  )
}

export default TVshows;