import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import lang from '../Utils/langConstants';
import { useSelector, useDispatch } from 'react-redux';
import openAIClient from '../Utils/openAIClient';
import ErrorPage from './ErrorPage';
import { API_OPTIONS } from '../Utils/Constants';
import { addGptMovieResullts } from '../Utils/gptSlice';
import ShimmerLoader from './ShimmerLoader';
const GptSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const dispatch = useDispatch();

  const configLang = useSelector((store) => store.configSlice.language);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const fetchMovieFromTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearch = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const gptQuery =
        'Act as a movie recommendation system and suggest some movies for the query : ' +
        searchQuery +
        ' ,only give names of 5 movies, comma separated like the following : GOAT, Goa, Theri, Thuppaki, Ghilli';
      const gptResults = await openAIClient.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      if (!gptResults.choices) {
        console.error('No results found from GPT');
        <ErrorPage errorCode="404" errorMessage="Page Not Found" />;
        return;
      }
      const gptMovies = gptResults?.choices[0]?.message?.content.split(',');
      const promiseArray = gptMovies.map((movie) => fetchMovieFromTMDB(movie));
      const movieData = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResullts({ movieNames: gptMovies, movieResults: movieData })
      );
    } catch (error) {
      console.error('Error fetching data:', error);
      <ErrorPage errorCode="404" errorMessage="Error fetching data: " error />;
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="flex items-center justify-center h-96">
      <Paper
        component="form"
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center p-2 w-[600px] !bg-black !text-white bg-opacity-10 relative z-50 border border-b-2 rounded border-spacing-2 border-gray-700"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={lang[configLang].gtpSearchPlaceholder}
          inputProps={{ 'aria-label': 'search' }}
          value={searchQuery}
          onChange={handleInputChange}
          className="!text-white"
        />

        <IconButton
          className="!bg-red-700 !text-white rounded-md py-2 px-4 "
          variant="outlined"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {isLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ShimmerLoader />
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
