import { useEffect } from 'react';
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { topRatedMovies } from '../Utils/movieSlice';
import { useSelector } from 'react-redux';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topMovie = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMoviesList = async () => {
    const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(topRatedMovies(json.results));
  };

  useEffect(() => {
    !topMovie && getTopRatedMoviesList();
  }, []);
};

export default useTopRatedMovies;
