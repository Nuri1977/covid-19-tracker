/* eslint-disable camelcase */
import fetchCountriesApi from '../../api/countries-api';
import transformDate from '../../helpers/transformDate';

const date = transformDate();

const GET_COUNTRIES = 'bookStore/books/COUNTRIES';

const initialState = [];

export const setCounrties = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getCountries = () => async (dispatch) => {
  const dataResponse = await fetchCountriesApi();
  const newData = dataResponse.dates[date].countries;
  const obj = Object.entries(newData);
  const resultArray = [];
  for (let i = 0; i <= obj.length - 1; i += 1) {
    const objdata = obj[i][1];
    const {
      id, name, regions, today_confirmed,
    } = objdata;
    resultArray.push({
      id, name, regions, today_confirmed,
    });
  }

  dispatch(setCounrties(resultArray));
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
