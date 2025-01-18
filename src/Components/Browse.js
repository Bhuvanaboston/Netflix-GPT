import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedSeries from '../Hooks/useTopRatedSeries';
import usePopularSeries from '../Hooks/usePopularSeries';
import useTopRatedMovies from '../Hooks/useTopRatesMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedSeries();
  usePopularSeries();
  useTopRatedMovies();
  useUpcomingMovies();
  const isGptViewer = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {isGptViewer && <GptSearchPage />}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
