import React from 'react';
import PropTypes from 'prop-types';

function OneRegion({
  name, todayConfirmed, todayDeaths, todayOpenCases, todayRecovered,
}) {
  return (
    <li className="flex justify-between striped">
      <div className="region-name">
        <h5>{name}</h5>
      </div>
      <div className="country-stats">
        <h6>
          <span>Confirmed: </span>
          {todayConfirmed}
        </h6>
        <h6>
          <span>Deaths: </span>
          {todayDeaths}
        </h6>
        <h6>
          <span>Open Cases: </span>
          {todayOpenCases}
        </h6>
        <h6>
          <span>Recovered: </span>
          {todayRecovered}
        </h6>
      </div>
    </li>
  );
}

OneRegion.propTypes = {
  name: PropTypes.string.isRequired,
  todayConfirmed: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  todayOpenCases: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
};

export default OneRegion;
