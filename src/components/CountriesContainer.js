/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OneCountry from './OneCountry';
import './CountriesContainer.css';
import transformDate from '../helpers/transformDate';

function CountriesContainer() {
  const [searchField, setSearchField] = useState('');
  const countries = useSelector((state) => state.countriesReducer);
  const date = transformDate();

  const handleSearch = (e) => setSearchField((e.target.value).toLowerCase());
  const filteredCountries = countries.filter((country) => country.id.includes(searchField));

  return (
    <div>
      <div className="flex justify-evenly header-countries container">
        <img className="world" src="https://simplemaps.com/static/demos/resources/svg-library/svgs/world.svg" alt="" />
        <h1 className="title">WORLD</h1>
      </div>
      <div className="bg-secondary">
        <div className="flex container stats justify-between">
          <h5 className="title-stats">
            Stats by country
            {' '}
            {date}
          </h5>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Countries"
            value={searchField}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

      </div>
      <ul className="ul-grid container">
        {filteredCountries.map(({ id, name, today_confirmed }) => (
          <OneCountry
            key={id}
            id={id}
            name={name}
            today_confirmed={today_confirmed}
            className="striped"
          />
        ))}
      </ul>
    </div>
  );
}

export default CountriesContainer;
