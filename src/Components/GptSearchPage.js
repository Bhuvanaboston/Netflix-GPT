import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import Header from './Header';
import { LOGIN_BG } from '../Utils/Constants';

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-auto md:object-contain"
          src={LOGIN_BG}
          alt="background-image"
        />
      </div>
      <div>
        <Header />
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
