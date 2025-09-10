import { useRef } from "react";
import { GoogleGenAI } from "@google/genai";


  

const SearchBar =() => {
  const usersIP=useRef(null);

  const ai = new GoogleGenAI({ apiKey: "AIzaSyCjhZVXZ2JtE2UXT5S7p18yM2zbMhJKk6s" });

  if(!usersIP.current.value) return;
  
  const query="Act as a Movie Recommendation system and suggest some movies for the query : "+usersIP.current.value+". only gice me 10 movies ,comma separated like the example result given ahead. Example result :Dangal, Baahubali 2: The Conclusion, Pushpa 2: The Rule, RRR, K.G.F: Chapter 2, Jawan, Pathaan, Kalki 2898 AD, Animal"

  async function main() {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
    });
    console.log(response.text);
  }

  const handleSubmit= async()=>{
   console.log(usersIP.current.value);
   main();
  }


  return (
    <div className="absolute top-6 left-1/2 z-10">
        <div className="">
          <form id="check" className="flex items-center bg-white h-12 text-black rounded-xl" onSubmit={(e)=>{e.preventDefault()}}>
              
              <input 
              ref={usersIP}
              type="text" 
              placeholder="Search Movies & Theme"
              className="outline-none bg-transparent p-4 w-96"
              />
              <button className="bg-gray-300" onClick={handleSubmit}>
                Submit
              </button>
          </form>
            <p></p>
        </div>

        
    </div> 
  )
}

export default SearchBar;