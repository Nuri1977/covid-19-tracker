/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OneRegion from './OneRegion';
import './RegionsContainer.css';

function RegionsContainer() {
  const countries = useSelector((state) => state.countriesReducer);
  const { id } = useParams();
  let country = [];
  countries.forEach((element) => {
    if (element.name === id) {
      country = element;
    }
  });

  const {
    name, regions, today_confirmed, today_deaths, today_open_cases, today_recovered,
  } = country;

  return (
    <div>
      <div className="container flex justify-evenly">
        <div className="country-name">
          <h3>{name}</h3>
        </div>
        <div className="country-stats">
          <h6>
            <span>Confirmed: </span>
            {today_confirmed}
          </h6>
          <h6>
            <span>Deaths: </span>
            {today_deaths}
          </h6>
          <h6>
            <span>Open Cases: </span>
            {today_open_cases}
          </h6>
          <h6>
            <span>Recovered: </span>
            {today_recovered}
          </h6>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="flex container stats justify-between">
          <h5 className="title-stats">Stats by region</h5>
        </div>
      </div>
      <ul className="container ul-regions">
        {regions.length === 0 ? (<h5>No data for regions </h5>)
          : regions.map(({
            id, name, today_confirmed, today_deaths, today_open_cases, today_recovered,
          }) => (
            <OneRegion
              key={id}
              id={id}
              name={name}
              todayConfirmed={today_confirmed}
              todayDeaths={today_deaths}
              todayOpenCases={today_open_cases}
              todayRecovered={today_recovered}
            />
          ))}
      </ul>
    </div>
  );
}

export default RegionsContainer;
