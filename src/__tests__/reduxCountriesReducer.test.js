import countriesReducer, { setCounrties } from '../redux/countries/countries';

const initialState = [];
describe('test redux', () => {
  it('if is empty array', () => {
    expect(countriesReducer(initialState, [])).toEqual([]);
  });

  it('if it is 3 items array', () => {
    expect(countriesReducer(initialState, setCounrties(['Brazil', 'Germany', 'Afganistan']))).toEqual(['Brazil', 'Germany', 'Afganistan']);
  });

  it('if return single item', () => {
    expect(countriesReducer(initialState, setCounrties(['Albania']))).toEqual(['Albania']);
  });
});
