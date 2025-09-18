import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addtrailerId} from "../utils/movieSlice"

const VideoBG = ({id}) => {
  //const [trailerId,settrailerId]=useState(null); //We can also do it by storing it in Redux , then use it by subscribing it at 1:55:00.
  const trailerIdfromRedux=useSelector(store=>store.movies.trailerId);
  const dispatch=useDispatch();
  //fetch Data
  useEffect(()=>{
    !trailerIdfromRedux && fetchTrailer(id);
  },[])
  const fetchTrailer=async (id)=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",API_options);
      const json=await data.json();

      const filteredData=json.results.filter((video)=>video.type==="Trailer");
      const Trailer=filteredData.length ? filteredData[0] : json.results[0];

      dispatch(addtrailerId(Trailer?.key))
  }
  
  return (
    <div className="overflow-hidden relative z-0 md:mt-0 -translate-y-[170px] md:-translate-y-0">
        <iframe
          className="w-full h-screen aspect-video scale-150"
          src={`https://www.youtube.com/embed/${trailerIdfromRedux}?autoplay=1&mute=1&loop=1&playlist=${trailerIdfromRedux}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="absolute bottom-60 md:bottom-0 left-0 w-full h-40 
                  bg-gradient-to-t from-black to-transparent">
        </div>
    </div>
  )
}

export default VideoBG;