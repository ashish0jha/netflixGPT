import { useEffect, useState } from "react";
import { API_options } from "../utils/constants";

const VideoBG = ({id}) => {
  const [trailerId,settrailerId]=useState(null); //We can also do it by storing it in Redux , then use it by subscribing it at1:55:00.
  //fetch Data
  useEffect(()=>{
    fetchTrailer(id);
  },[])
  const fetchTrailer=async (id)=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos",API_options);
      const json=await data.json();

      const filteredData=json.results.filter((video)=>video.type==="Trailer");
      const Trailer=filteredData.length ? filteredData[0] : json.results[0];

      console.log(Trailer);
      settrailerId(Trailer.key)
      
  }
  return (
    <div className="overflow-hidden">
        <iframe
          className="aspect-video scale-150"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&playlist=${trailerId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

    </div>
  )
}

export default VideoBG;