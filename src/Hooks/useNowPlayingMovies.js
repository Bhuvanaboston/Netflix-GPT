import { useEffect } from 'react';
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { nowPlayingMovies } from '../Utils/movieSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMoviesList = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(nowPlayingMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    getNowPlayingMoviesList();
  }, []);
};

export default useNowPlayingMovies;
