import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addToprated } from "../utils/movieSlice";

const useToprated=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchMovies();
    },[])

    const fetchMovies= async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options)
        
        const json=await data.json();
        dispatch(addToprated(json.results));
    }
}

export default useToprated;