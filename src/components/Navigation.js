import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <header className="navbar bg-secondary">
      <ul className="flex justify-between container">
        <li>
          <NavLink to="/">
            <i className="fa-solid fa-angle-left" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Covid-19 Tracker
          </NavLink>
        </li>
        <li>
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
