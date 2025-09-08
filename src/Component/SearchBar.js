import { useDispatch } from "react-redux";
import { toggleGptbtn } from "../utils/StatesSlice";

const SearchBar = () => {
  const dispatch=useDispatch();
  return (
    <div className="absolute top-6 left-1/2 z-10">
        <div className="flex items-center bg-white h-12 text-black rounded-xl">
            <p className="text-xl font-bold cursor-pointer bg-gray-300 p-[10px] px-5 rounded-l-lg" 
              onClick={()=>{
                  dispatch(toggleGptbtn())
              }}>←</p>
            <input 
            type="text" 
            placeholder="Search Movies & Theme"
            className="outline-none bg-transparent p-4 w-96"
            onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    console.log("Ashish Ojha")
                }
            }}
            />
        </div>
        
    </div> 
  )
}

export default SearchBar;