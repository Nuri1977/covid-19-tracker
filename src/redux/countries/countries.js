import fetchCountriesApi from '../../api/countries-api';
import handleData from '../../helpers/handleData';

export const GET_COUNTRIES = 'bookStore/books/COUNTRIES';

const initialState = [];

export const setCounrties = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getCountries = () => async (dispatch) => {
  const dataResponse = await fetchCountriesApi();
  const resultArray = handleData(dataResponse);
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
