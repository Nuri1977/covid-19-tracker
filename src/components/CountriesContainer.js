/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

function CountriesContainer() {
  const countries = useSelector((state) => state.countriesReducer);
  console.log(countries);
  return (
    <div>
      <ul>
        {countries.map(({ id, name, today_confirmed }) => (
          <li key={id}>
            <h3>
              {name}
            </h3>
            <h6>
              {' '}
              Casses Confirmed:
              {' '}
              {today_confirmed}
            </h6>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesContainer;
