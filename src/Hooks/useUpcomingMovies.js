import { useEffect } from 'react';
import { API_OPTIONS, UPCOMING_MOVIES_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { upcomingMovies } from '../Utils/movieSlice';
import { useSelector } from 'react-redux';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovie = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMoviesList = async () => {
    const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(upcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovie && getUpcomingMoviesList();
  }, []);
};

export default useUpcomingMovies;
