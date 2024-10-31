// src/components/QualitiesForm.js
import React, { useState } from 'react';

function QualitiesForm({ onSort }) {
  const [qualities, setQualities] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    const newQualities = [...qualities];
    newQualities[index] = value;
    setQualities(newQualities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSort(sortHouse(qualities));
  };

  const sortHouse = (qualities) => {
    const houseTraits = {
      Gryffindor: [
        'brave',
        'courageous',
        'determined',
        'daring',
        'chivalrous',
        'bold',
        'adventurous',
        'valiant',
        'gallant',
        'fearless',
      ],
      Slytherin: [
        'ambitious',
        'cunning',
        'resourceful',
        'leadership',
        'strategic',
        'determined',
        'clever',
        'goal-oriented',
        'prideful',
        'self-reliant',
      ],
      Ravenclaw: [
        'intelligent',
        'wise',
        'creative',
        'witty',
        'curious',
        'knowledgeable',
        'analytical',
        'open-minded',
        'logical',
        'insightful',
      ],
      Hufflepuff: [
        'loyal',
        'patient',
        'fair',
        'hardworking',
        'dedicated',
        'kind',
        'tolerant',
        'honest',
        'modest',
        'dependable',
      ],
    };

    const houseScores = {
      Gryffindor: 0,
      Slytherin: 0,
      Ravenclaw: 0,
      Hufflepuff: 0,
    };

    qualities.forEach((quality) => {
      for (const house in houseTraits) {
        if (houseTraits[house].includes(quality.toLowerCase())) {
          houseScores[house]++;
        }
      }
    });

    // Determine the house with the highest score
    const sortedHouses = Object.entries(houseScores).sort(
      (a, b) => b[1] - a[1]
    );

    // Handle ties or no matches
    if (sortedHouses[0][1] === 0) {
      // If no matches, assign a random house
      const houses = Object.keys(houseTraits);
      return houses[Math.floor(Math.random() * houses.length)];
    } else {
      // Return the house with the highest score
      return sortedHouses[0][0];
    }
  };

  return (
    <div className="qualities-form">
      <h2>Enter Four of Your Qualities</h2>
      <form onSubmit={handleSubmit}>
        {qualities.map((quality, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Quality ${index + 1}`}
            value={quality}
            onChange={(e) => handleChange(index, e.target.value)}
            required
          />
        ))}
        <button type="submit">Sort Me!</button>
      </form>
    </div>
  );
}

export default QualitiesForm;
