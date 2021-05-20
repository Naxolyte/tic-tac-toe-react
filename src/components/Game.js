import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../calculateWinner';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const styles = {
    width: '200px',
    margin: '20px auto',
    textAlign: 'center',
  };
  const handleClick = i => {
    const boardCopy = [...board];
    //if user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    //put X or O in clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <button
        onClick={() => {
          setBoard(Array(9).fill(null));
          setXisNext(true);
        }}
      >
        Start Game
      </button>
    );
  };

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? 'Winner: ' + winner
            : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
