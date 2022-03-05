import React from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/configureStore';

function RegionsContainer() {
  const test = useSelector((state) => state);
  console.log(test);
  console.log(store.getState());

  return (
    <div>RegionsContainer</div>
  );
}

export default RegionsContainer;
