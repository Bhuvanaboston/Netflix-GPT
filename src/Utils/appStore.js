import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './movieSlice';
import seriesReducer from './seriesSlice';
const appStore = configureStore({
  reducer: {
    // Define your reducers here
    user: userReducer,
    movies: moviesReducer,
    series: seriesReducer,
  },
});

export default appStore;
