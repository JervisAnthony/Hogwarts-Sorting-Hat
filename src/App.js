// src/App.js
import React, { useState } from 'react';
import SortingHat from './components/SortingHat';
import QualitiesForm from './components/QualitiesForm';
import Result from './components/Result';
import './index.css';

function App() {
  const [step, setStep] = useState(1);
  const [house, setHouse] = useState('');

  const handleSorting = (selectedHouse) => {
    setHouse(selectedHouse);
    setStep(3);
  };

  const restartSorting = () => {
    setHouse('');
    setStep(1);
  };

  return (
    <div className="App">
      {step === 1 && <SortingHat onStart={() => setStep(2)} />}
      {step === 2 && <QualitiesForm onSort={handleSorting} />}
      {step === 3 && <Result house={house} onRestart={restartSorting} />}
    </div>
  );
}

export default App;
