import { useParams } from 'react-router-dom'
import MoviesDetails from './MoviesDetails';
import Header from './Header';

const FullMovie = () => {
    const {movieId}=useParams();
  return (
    <div>
      <Header/>
      <MoviesDetails id={movieId}/>
    </div>
  )
}

export default FullMovie;