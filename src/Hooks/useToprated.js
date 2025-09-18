import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addToprated } from "../utils/movieSlice";

const useToprated=()=>{
    const dispatch=useDispatch();
    const TopRatedMovies=useSelector(store=>store.movies.toprated);
    useEffect(()=>{
        !TopRatedMovies &&
        fetchMovies();
    },[])

    const fetchMovies= async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options)
        
        const json=await data.json();
        dispatch(addToprated(json.results));
    }
}

export default useToprated;