import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedSeries from '../Hooks/useTopRatedSeries';
import usePopularSeries from '../Hooks/usePopularSeries';
import useTopRatedMovies from '../Hooks/useTopRatesMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
const Browse = () => {
  useNowPlayingMovies();
  useTopRatedSeries();
  usePopularSeries();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
