// src/components/SortingHat.js
import React from 'react';
import sortingHatImage from '../assets/sorting-hat.png';

function SortingHat({ onStart }) {
  return (
    <div className="sorting-hat">
      <h1>Welcome to the Hogwarts Sorting Hat</h1>
      <img
        src={sortingHatImage}
        alt="Sorting Hat"
        className="sorting-hat-image"
      />
      <button onClick={onStart}>Start Sorting</button>
    </div>
  );
}

export default SortingHat;
