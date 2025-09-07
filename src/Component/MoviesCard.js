import { MoviePoster } from "../utils/constants";

const MoviesCard = ({poster_path,title}) => {
  return (
    <div className="flex-shrink-0 m-5">
        <div className="flex flex-col items-center rounded-md
                hover:scale-110 
                hover:border-white 
                hover:border-[0.5px] 
                cursor-pointer 
                transition duration-200">
            <img 
            alt="MoviePoster" 
            src={MoviePoster+poster_path}
            className="w-40 rounded-md" 
            />
            <p className="text-center w-40">{title}</p>
        </div>
        
    </div>
  )
}

export default MoviesCard;