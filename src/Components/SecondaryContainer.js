import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const topRatedseries = useSelector((store) => store.series?.topRatesSeries);
  const popularSeries = useSelector((store) => store.series?.popularSeries);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  console.log(upcomingMovies);
  return (
    <div className=" bg-black pl-12">
      <div className="-mt-52 relative z-20">
        <MovieList title={'Now Playing'} movies={movies} />
      </div>
      <MovieList title={'Top Rated Series'} movies={topRatedseries} />
      <MovieList title={'Popular Series'} movies={popularSeries} />
      <MovieList title={'Top Rated Movies'} movies={topRatedMovies} />
      <MovieList title={'Upcoming Movies'} movies={upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
