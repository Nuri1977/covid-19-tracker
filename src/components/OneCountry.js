/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function OneCountry({ id, name, todayConfirmed }) {
  return (
    <NavLink to={`/${name}`}>
      <li className="border">
        <h3>{id}</h3>
        <h6>{name}</h6>
        <h6>{todayConfirmed}</h6>
      </li>
    </NavLink>

  );
}

OneCountry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  todayConfirmed: PropTypes.number.isRequired,
};

export default OneCountry;
