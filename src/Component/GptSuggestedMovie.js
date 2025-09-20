import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import MoviesCard from "./MoviesCard";
import { Link } from "react-router-dom";
import { BG_Page } from "../utils/constants";

const GptSuggestedMovie = () => {
  let SuggestedMoviesName = useSelector((store) => store.GPTSearchedMovie.suggested);
  SuggestedMoviesName=SuggestedMoviesName?.split(",");

  const checkbtn=useSelector(store=> store.States.Loadingbtn)

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!SuggestedMoviesName || SuggestedMoviesName.length === 0) return;

    const fetchSuggested = async () => {
      try {
        const results = await Promise.all(
          SuggestedMoviesName.map(async (movie) => {
            const res = await fetch(
              `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
              API_options
            );
            const json = await res.json();
            return json.results[0];
          })
        );
        setMovies(results.filter(Boolean));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchSuggested();
  }, [SuggestedMoviesName]);

  return (
    <div className="absolute top-40 md:top-32 mt-14 z-50" style={{
                                backgroundImage: `url(${BG_Page})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }} >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        {(movies.length===0 && checkbtn)
        ? 
        <h2 className="text-xl font-bold text-center animate-pulse bg-white p-1 rounded-md text-black">
            Loading...
        </h2> : ""
        }
        {movies.length!==0 ? <div className="relative z-10" >
            <h2 className="text-xl font-bold text-white p-2">GPT Suggested Movies</h2>
            <div className="flex flex-wrap gap-4">
                {movies.map((movie) => (
                  <Link key={movie.id} to={`/Browse/${movie.id}`}>
                      <MoviesCard
                          poster_path={movie.poster_path}
                          title={movie.title}
                          id={movie.id}
                          overveiw={movie.overview}
                          backdrop_path={movie.backdrop_path}
                      />
                  </Link>
                
                ))}
            </div></div> : ""
        }
      
    </div>
  );
};

export default GptSuggestedMovie;