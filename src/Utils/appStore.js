import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './movieSlice';
import seriesReducer from './seriesSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';
const appStore = configureStore({
  reducer: {
    // Define your reducers here
    user: userReducer,
    movies: moviesReducer,
    series: seriesReducer,
    gpt: gptReducer,
    configSlice: configReducer,
  },
});

export default appStore;
