import { useEffect } from 'react';
import { API_OPTIONS, POPULAR_SERIES_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { popularSeries } from '../Utils/seriesSlice';
import { useSelector } from 'react-redux';

const usePopularSeries = () => {
  const dispatch = useDispatch();
  const popularSeriesList = useSelector((store) => store.series.popularSeries);

  const getPopularSeriesList = async () => {
    const data = await fetch(POPULAR_SERIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(popularSeries(json.results));
  };

  useEffect(() => {
    !popularSeriesList && getPopularSeriesList();
  }, []);
};

export default usePopularSeries;
