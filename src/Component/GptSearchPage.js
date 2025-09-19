import { BG_Page } from "../utils/constants";
import GptSuggestedMovie from "./GptSuggestedMovie";
import Header from "./Header";
import SearchBar from "./SearchBar";

const GptSearchPage = () => {
  return (
    <div className="bg-black flex justify-center overflow-hidden">
        <Header/>
        <div className="absolute">
            <img
            src={BG_Page} 
            alt="bg"
            className="h-screen object-cover md:h-auto"
            />
        </div>
        <SearchBar/>
        <GptSuggestedMovie/>
    </div>
  )
}

export default GptSearchPage;