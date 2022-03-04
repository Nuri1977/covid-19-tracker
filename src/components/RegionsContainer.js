import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../redux/countries/countries';

function RegionsContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCountries()(dispatch);
  }, []);
  const countries = useSelector((state) => state.countriesReducer);
  console.log(countries);

  return (
    <div>RegionsContainer</div>
  );
}

export default RegionsContainer;
