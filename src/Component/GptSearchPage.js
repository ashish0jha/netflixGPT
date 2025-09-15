import { BG_Page } from "../utils/constants";
import GptSuggestedMovie from "./GptSuggestedMovie";
import SearchBar from "./SearchBar";

const GptSearchPage = () => {
  return (
    <div className="bg-black flex justify-center">
        <div className="absolute">
            <img
            src={BG_Page} 
            alt="bg"
            />
        </div>
        <SearchBar/>
        <GptSuggestedMovie/>
    </div>
  )
}

export default GptSearchPage;