import { API_OPTIONS } from '../Utils/Constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieTrailerVideo } from '../Utils/movieSlice';

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMoviesVideosList = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    //  dispatch(nowPlayingMovies(json.results));
    const trailerList = json.results.filter((i) => i.type === 'Trailer');
    const trailer = trailerList.length > 0 ? trailerList[0] : json.results[0];
    dispatch(addMovieTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideosList();
  }, []);
};

export default useGetMovieTrailer;
