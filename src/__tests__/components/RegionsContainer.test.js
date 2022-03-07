/* eslint-disable camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../__mocks__/configureStore';
import OneRegion from '../../components/OneRegion';

describe('Countries snapshot', () => {
  test('renders correctly', () => {
    const id = 'germany';
    const name = 'Germany';
    const today_confirmed = 56;
    const today_deaths = 55;
    const today_open_cases = 54;
    const today_recovered = 53;
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <OneRegion
              id={id}
              name={name}
              todayConfirmed={today_confirmed}
              todayDeaths={today_deaths}
              todayOpenCases={today_open_cases}
              todayRecovered={today_recovered}
            />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
