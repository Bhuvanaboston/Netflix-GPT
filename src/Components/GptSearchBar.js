import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { LOGIN_BG } from '../Utils/Constants';
import lang from '../Utils/langConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const configLang = useSelector((store) => store.configSlice.language);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="absolute">
        <img src={LOGIN_BG} alt="background-image" />
      </div>
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
    </div>
  );
};

export default GptSearchBar;
