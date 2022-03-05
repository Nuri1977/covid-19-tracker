import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OneRegion from './OneRegion';

function RegionsContainer() {
  const countries = useSelector((state) => state.countriesReducer);
  const { id } = useParams();
  let regions = [];
  countries.forEach((country) => {
    if (country.name === id) {
      regions = country.regions;
    }
  });

  console.log(regions);

  return (
    <div>
      <ul>
        {regions.map(({ id, name }) => (
          <OneRegion
            key={id}
            id={id}
            name={name}
          />
        ))}
      </ul>
    </div>
  );
}

export default RegionsContainer;
