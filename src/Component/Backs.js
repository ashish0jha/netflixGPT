import { useEffect, useState } from "react";
import { API_options, BG_Page, MoviePoster } from "../utils/constants";

const Backs = ({id}) => {
  const [trailerId,settrailerId]=useState(null);
  //fetch Data
  useEffect(()=>{
    fetchTrailer(id);
  },[])
  const fetchTrailer=async (id)=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",API_options);
      const json=await data.json();

      const filteredData=json.results.filter((video)=>video.type==="Trailer");
      const Trailer=filteredData.length ? filteredData[0] : json.results[0];
      settrailerId(Trailer?.key)
  }
  if(!trailerId){
    return (
      <div>
        <img 
          src={BG_Page}
          alt=""
        />
      </div>
    )
  }
  return (
    <div className="overflow-hidden relative z-0 md:mt-0 -translate-y-[170px] md:-translate-y-0 rounded-md">
        <iframe
            className="w-full aspect-video scale-[200%]"
            src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${trailerId}&disablekb=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
        ></iframe>


    </div>
  )
}

export default Backs;