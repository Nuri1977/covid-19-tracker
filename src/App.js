import './App.css';
import { Routes, Route } from 'react-router-dom';
import CountriesContainer from './components/CountriesContainer';
import RegionsContainer from './components/RegionsContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountriesContainer />} />
      <Route path="regions" element={<RegionsContainer />} />
    </Routes>
  );
}

export default App;
