import fetchCountriesApi from '../../api/countries-api';

const GET_COUNTRIES = 'bookStore/books/COUNTRIES';

const initialState = [];

export const setCounrties = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getCountries = () => async (dispatch) => {
  const countries = await fetchCountriesApi();
  const contriesArray = [countries];

  dispatch(setCounrties(contriesArray));
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
