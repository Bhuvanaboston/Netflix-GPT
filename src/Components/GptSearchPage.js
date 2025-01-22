import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import Header from './Header';
import { LOGIN_BG } from '../Utils/Constants';

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={LOGIN_BG} alt="background-image" />
      </div>
      <Header />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
