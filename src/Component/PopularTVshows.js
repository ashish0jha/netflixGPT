import { useEffect, useState } from "react"
import { API_options } from "../utils/constants";
import MoviesCard from "./MoviesCard";
import { Link } from "react-router-dom";

const PopularTVshows = () => {
  const [popularTVshows,setpopularTVshows]=useState(null)
  useEffect(()=>{
    fetchpopularTVshows();
  },[])
  const fetchpopularTVshows=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",API_options)
    const json=await data.json();
    setpopularTVshows(json?.results)
  }
  if(!popularTVshows) {
    return
  }
  console.log(popularTVshows)
  return (
    <div className="flex flex-wrap h-screen text-white pt-20">
      {
        popularTVshows.map((show)=>(
          <Link key={show?.id} to={`/Browse/shows/${show?.id}`}>
              <MoviesCard  poster_path={show?.poster_path} title={show?.original_name} id={show?.id} overveiw={show?.overview} backdrop_path={show.backdrop_path}/>
          </Link>
          
        ))
      }
    </div>
  )
}

export default PopularTVshows