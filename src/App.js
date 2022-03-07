import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from './redux/countries/countries';
import CountriesContainer from './components/CountriesContainer';
import RegionsContainer from './components/RegionsContainer';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCountries()(dispatch);
  }, []);
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<CountriesContainer />} />
        <Route path="/:id" element={<RegionsContainer />} />
      </Routes>
    </div>

  );
}

export default App;
