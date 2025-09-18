import { MoviePoster } from "../utils/constants";

const MoviesCard = ({poster_path,title}) => {
  return (
    <div className="flex-shrink-0 md:m-5">
        <div className="flex flex-col items-center rounded-md
                md:hover:scale-110 
                md:hover:border-white 
                md:hover:border-[0.5px] 
                cursor-pointer 
                transition duration-200">
            <img 
            alt="MoviePoster" 
            src={MoviePoster+poster_path}
            className="md:w-40 rounded-md w-32 object-cover" 
            />
            <p className="text-center w-40">{title}</p>
        </div>
        
    </div>
  )
}

export default MoviesCard;