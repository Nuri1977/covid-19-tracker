export const GET_COUNTRIES = 'bookStore/books/COUNTRIES';

const initialState = [];

export const setCounrties = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getCountries = () => async (dispatch) => {
  const mockedArray = [
    {
      id: 'brazil',
      name: 'Brazil',
      regions: [],
      today_confirmed: 35,
      today_deaths: 38,
      today_open_cases: 37,
      today_recovered: 30,
    },
    {
      id: 'germany',
      name: 'Germany',
      regions: [],
      today_confirmed: 45,
      today_deaths: 48,
      today_open_cases: 47,
      today_recovered: 40,
    },
  ];
  dispatch(setCounrties(mockedArray));
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
