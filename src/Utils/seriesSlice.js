import { createSlice } from '@reduxjs/toolkit';

const seriesSlice = createSlice({
  name: 'series',
  initialState: { topRatesSeries: null, popularSeries: null },
  reducers: {
    topRatesSeries: (state, action) => {
      state.topRatesSeries = action.payload;
    },
    popularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
  },
});

export const { topRatesSeries, popularSeries } = seriesSlice.actions;
export default seriesSlice.reducer;
