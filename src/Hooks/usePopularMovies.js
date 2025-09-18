import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const PopularMovies=useSelector(store=>store.movies.popularmovies);
    useEffect(()=>{
        !PopularMovies && 
        fetchMovies();
    },[])

    const fetchMovies= async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options)
        
        const json=await data.json();
        dispatch(addPopularMovies(json.results));
    }
}

export default usePopularMovies;