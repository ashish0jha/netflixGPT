import { useState } from "react";
import { MoviePoster } from "../utils/constants";

const MoviesCard = ({poster_path,title}) => {
    const [movietitle,setmovietitle]=useState(false);
  return (
    <div className="flex-shrink-0 m-4">
        <div className="flex flex-col items-center rounded-md hover:scale-110 duration-300 shadow-2xl cursor-pointer">
            <img 
            alt="MoviePoster" 
            src={MoviePoster+poster_path}
            className="w-40 rounded-md"
            onMouseEnter={()=>{
                setmovietitle(true);
            }} 
            onMouseLeave={()=>{
                setmovietitle(false);
            }}   
            />
            {movietitle && <p  className="w-36 text-center">{title}</p>}
        </div>
    </div>
  )
}

export default MoviesCard;