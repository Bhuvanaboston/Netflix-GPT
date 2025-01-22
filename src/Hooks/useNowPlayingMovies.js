import { useEffect } from 'react';
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { nowPlayingMovies } from '../Utils/movieSlice';
import { useSelector } from 'react-redux';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMoviesList = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(nowPlayingMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    !nowPlayingMovie && getNowPlayingMoviesList();
  }, []);
};

export default useNowPlayingMovies;
