import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../utils/movieSlice";
import { API_options } from "../utils/constants";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        fetchMovies();
    },[])

    const fetchMovies= async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?-US&page=1', API_options)
        
        const json=await data.json();
        dispatch(addnowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;