// src/components/Result.js
import React from 'react';
import gryffindorCrest from '../assets/gryffindor.png';
import slytherinCrest from '../assets/slytherin.png';
import ravenclawCrest from '../assets/ravenclaw.png';
import hufflepuffCrest from '../assets/hufflepuff.png';

function Result({ house, onRestart }) {
  const houseData = {
    Gryffindor: {
      name: 'Gryffindor',
      description:
        'You are brave and chivalrous. Gryffindors are known for their courage.',
      crest: gryffindorCrest,
    },
    Slytherin: {
      name: 'Slytherin',
      description:
        'You are ambitious and resourceful. Slytherins are known for their cunning.',
      crest: slytherinCrest,
    },
    Ravenclaw: {
      name: 'Ravenclaw',
      description:
        'You are intelligent and witty. Ravenclaws are known for their wisdom.',
      crest: ravenclawCrest,
    },
    Hufflepuff: {
      name: 'Hufflepuff',
      description:
        'You are loyal and hardworking. Hufflepuffs are known for their dedication.',
      crest: hufflepuffCrest,
    },
  };

  const { name, description, crest } = houseData[house];

  return (
    <div className="result">
      <h2>The Sorting Hat has sorted you into...</h2>
      <h1>{name}!</h1>
      <img src={crest} alt={`${name} Crest`} className="house-crest" />
      <p>{description}</p>
      <button onClick={onRestart}>Try Again</button>
    </div>
  );
}

export default Result;
