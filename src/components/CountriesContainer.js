/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OneCountry from './OneCountry';

function CountriesContainer() {
  const [searchField, setSearchField] = useState('');
  const countries = useSelector((state) => state.countriesReducer);

  const handleSearch = (e) => setSearchField((e.target.value).toLowerCase());
  const filteredCountries = countries.filter((country) => country.id.includes(searchField));

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Countries"
        value={searchField}
        onChange={handleSearch}
      />
      <ul>
        {filteredCountries.map(({ id, name, today_confirmed }) => (
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
