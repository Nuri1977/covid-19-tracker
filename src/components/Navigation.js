import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/"><p>Home</p></NavLink>
      </li>
      <li>
        <NavLink to="/regions"><p>ragions</p></NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
