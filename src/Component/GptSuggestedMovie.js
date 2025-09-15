import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import MoviesCard from "./MoviesCard";

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
    <div className="absolute top-24 p-10 ">
        {(movies.length===0 && checkbtn)
        ? 
        <h2 className="text-xl font-bold text-center animate-pulse bg-red-600 p-5 rounded-lg">
            Loading...
        </h2> : ""
        }
        {movies.length!==0 ? <div className=" bg-black bg-opacity-45">
          <h2 className="text-xl font-bold">GT Suggested Movies</h2>
            <div className="flex flex-wrap gap-4">
                {movies.map((movie, index) => (
                <MoviesCard
                    key={index}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
                ))}
            </div></div> : ""
        }
      
    </div>
  );
};

export default GptSuggestedMovie;