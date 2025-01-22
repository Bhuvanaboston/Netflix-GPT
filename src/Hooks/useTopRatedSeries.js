import { useEffect } from 'react';
import { API_OPTIONS, TOP_RATED_SERIES_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { topRatesSeries } from '../Utils/seriesSlice';
import { useSelector } from 'react-redux';

const useTopRatedSeries = () => {
  const dispatch = useDispatch();
  const topSeriesList = useSelector((store) => store.series.topRatesSeries);

  const getTopRatedSeriesList = async () => {
    const data = await fetch(TOP_RATED_SERIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(topRatesSeries(json.results));
  };

  useEffect(() => {
    !topSeriesList && getTopRatedSeriesList();
  }, []);
};

export default useTopRatedSeries;
