import React from 'react';
import PropTypes from 'prop-types';

function OneRegion({ id, name }) {
  return (
    <li className="border">
      <h3>
        Region
        {' '}
        {id}
      </h3>
      <h3>
        Name
        {' '}
        {name}
      </h3>
    </li>
  );
}

OneRegion.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default OneRegion;
