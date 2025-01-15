import { useEffect } from 'react';
import { API_OPTIONS, POPULAR_SERIES_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { popularSeries } from '../Utils/seriesSlice';

const usePopularSeries = () => {
  const dispatch = useDispatch();

  const getPopularSeriesList = async () => {
    const data = await fetch(POPULAR_SERIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(popularSeries(json.results));
  };

  useEffect(() => {
    getPopularSeriesList();
  }, []);
};

export default usePopularSeries;
