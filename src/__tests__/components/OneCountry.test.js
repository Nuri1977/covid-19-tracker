/* eslint-disable camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../__mocks__/configureStore';
import OneCountry from '../../components/OneCountry';

describe('One Country snapshot', () => {
  const id = 'germany';
  const name = 'Germany';
  const today_confirmed = 47;
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <OneCountry id={id} name={name} today_confirmed={today_confirmed} />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
