import { useEffect } from 'react';
import { API_OPTIONS, UPCOMING_MOVIES_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { upcomingMovies } from '../Utils/movieSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMoviesList = async () => {
    const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(upcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMoviesList();
  }, []);
};

export default useUpcomingMovies;
