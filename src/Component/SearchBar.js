import { useDispatch, useSelector } from "react-redux";
import { toggleGptbtn, toggleGptLodingbtn } from "../utils/StatesSlice";
import { useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { addSuggestedMovies } from "../utils/SuggestedSlice";
import { GEMINI_KEY } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const userinput=useRef(null);
  const ai = new GoogleGenAI({ apiKey: GEMINI_KEY});
  const Loadingbtn=useSelector(store=> store.States.Loadingbtn)

  const ClickHandler=()=>{
      if(!userinput){return}
      const query=`Given the input: ${userinput.current.value}, please provide a list of exactly 20 movie titles relevant to this input. Return only the movie names, separated by commas ,no extra information, summaries, or descriptions.`
      async function main() {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: query,
          config: {
            thinkingConfig: {
              thinkingBudget: 0,
            },
          }
        });
        dispatch(addSuggestedMovies(response.text))
      }
      main();
  }

  return (
    <div className="absolute top-36 md:top-24 z-10 w-[300px] md:w-1/2">
        <div className="flex items-center bg-white h-12 text-black rounded-xl">
            <p className="text-xl font-bold cursor-pointer bg-gray-300 p-[10px] px-5 rounded-l-lg" 
              onClick={()=>{
                navigate("/Browse")
              }}>←</p>
            <input
              ref={userinput} 
              type="text" 
              placeholder="Search Movies & Theme"
              className="outline-none bg-transparent p-4 w-96"
              onKeyDown={(e)=>{
                  if(e.key==="Enter"){
                      ClickHandler();
                      !Loadingbtn && dispatch(toggleGptLodingbtn());
                  }
              }}
            />
        </div>
    </div> 
  )
}

export default SearchBar;