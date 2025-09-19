import { useEffect, useState } from "react"
import { API_options, MoviePoster } from "../utils/constants";
import TrailerMovie from "./TrailerMovie";

const MoviesDetails = ({id}) => {
    const [details,setdetails]=useState(null);
    const [play,setplay]=useState(false)
    useEffect(()=>{
      fetchDetails();
    },[])
    const fetchDetails=async ()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,API_options);
        const json=await data.json();
        console.log(json)
        setdetails(json);
    }
    const clickHandler=()=>{
      setplay(true)
    }
    if(!details){
      return
    }
  return (
    <div>
      <img 
        src={MoviePoster+details?.backdrop_path} 
        alt=""
        className="absolute top-0 -z-10 h-screen w-full object-cover"
      />
       <div className="absolute inset-0 bg-[radial-gradient(circle,transparent,black)]"></div>
      <div className="absolute z-0 top-44 left-44 text-white font-semibold bg-gradient-to-r from-black/25 to-transparent p-10 w-1/2 rounded-t-3xl">

        <p className="text-lg my-3">Duration:{details?.runtime}m</p>

        <h3 className="px-1.25 m-1rounded-lg my-3"><span className="text-yellow-300">★ </span>{details?.vote_average} </h3>

        <h1 className="text-5xl font-bold my-3">{details?.title}</h1>

        <p className="hidden md:inline-block my-3">{details?.overview}</p>
        
        <button className="bg-red-600 py-2 px-4 rounded-3xl hover:bg-red-700 font-bold hover:scale-110 duration-300"
            onClick={clickHandler}>▶︎ Watch
        </button>
        <button className="bg-gray-200 py-2 px-4 rounded-3xl text-black mx-4 hover:bg-white font-bold hover:scale-110 duration-300">+ ADD LIST
        </button>
      </div>

      {play && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
          onClick={() => setplay(false)}
        >
          <TrailerMovie id={details?.id} />
        </div>
      )}
      
    </div>
  )
}

export default MoviesDetails