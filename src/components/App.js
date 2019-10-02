import React, { useState } from 'react';
import Game from './Game';

//https://jscomplete.com/playground/rgs3.9

// STAR MATCH - V9

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default StarMatch;
