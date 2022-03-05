/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import OneCountry from './OneCountry';

function CountriesContainer() {
  const countries = useSelector((state) => state.countriesReducer);

  return (
    <div>
      <ul>
        {countries.map(({ id, name, today_confirmed }) => (
          <OneCountry
            key={id}
            id={id}
            name={name}
            todayConfirmed={today_confirmed}
          />
        ))}
      </ul>
    </div>
  );
}

export default CountriesContainer;
