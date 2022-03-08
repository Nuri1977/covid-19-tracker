/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import map from '../assets/images/icons8-map-160.png';
import './OneCountry.css';

function OneCountry({ name, today_confirmed }) {
  return (
    <NavLink to={`/${name}`}>
      <li className="card">
        <div>
          <img className="map" src={map} alt="map" />
          <i className="fa-regular fa-circle-right" />
        </div>
        <h5>{name}</h5>
        <h6>{today_confirmed}</h6>
      </li>
    </NavLink>
  );
}

OneCountry.propTypes = {
  name: PropTypes.string.isRequired,
  today_confirmed: PropTypes.number.isRequired,
};

export default OneCountry;
