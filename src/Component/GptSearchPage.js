import { BG_Page } from "../utils/constants";
import SearchBar from "./SearchBar";

const GptSearchPage = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img
            src={BG_Page} 
            alt="bg"
            className="brightness-[30%]"
            />
        </div>
        <SearchBar/>
    </div>
  )
}

export default GptSearchPage;