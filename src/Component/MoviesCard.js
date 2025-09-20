import { useState } from "react";
import { MoviePoster } from "../utils/constants";
import Backs from "./Backs";

const MoviesCard = ({poster_path,title,id,overveiw}) => {
  const [hovered,sethovered]=useState(false)
  return (
    <div
      className="flex-shrink-0 md:m-5 cursor-pointer"
      onMouseEnter={() => {
        setTimeout(()=>{
          sethovered(true)
        },500)
      }}
      onMouseLeave={() => sethovered(false)}
    >
      {hovered ? (
        <div className="w-80 h-72 overflow-hidden rounded-lg relative hover:shadow-white hover:shadow-sm ">
          <div className="relative">
            <Backs id={id}/>
            <div className="absolute inset-0 z-5"></div>
            <h1 className="text-xl font-bold absolute bottom-2 left-5 z-10 text-white">{title}</h1>
          </div>
          <p className="p-3 text-white">{overveiw}</p>
        </div>
        
      ) : (
        <div
          className="flex flex-col items-center rounded-md
          hover:shadow-sm hover:shadow-white"
        >
          <img
            alt="MoviePoster"
            src={MoviePoster + poster_path}
            className="md:w-40 rounded-md w-32 object-cover"
          />
          <p className="text-center w-40 text-white">{title}</p>
        </div>
      )}
    </div>

  )
}

export default MoviesCard;