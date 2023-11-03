import * as React from "react";
import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Pemenang: " + winner;
  } else {
    status = "Pemain selanjutnya: " + (xIsNext ? "X" : "O");
  }

  function selectSquare(square) {
    if (squares[square] || calculateWinner(squares)) {
      return;
    }
    const newSquares = [...squares];
    if (xIsNext) {
      newSquares[square] = "X";
    } else {
      newSquares[square] = "O";
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function restart() {
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) {
    return (
      <button
        className="square w-40 h-40 cursor-pointer text-[100px]"
        onClick={() => selectSquare(i)}
      >
        {squares[i]}
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-[40px]">STATUS {status}</div>
      <div className="grid grid-cols-3 gap-0">
        <div className="border-4 border-t-0 border-l-0 ">{renderSquare(0)}</div>
        <div className="border-4 border-t-0">{renderSquare(1)}</div>
        <div className="border-4 border-t-0 border-r-0">{renderSquare(2)}</div>
        <div className="border-4 border-l-0">{renderSquare(3)}</div>
        <div className="border-4">{renderSquare(4)}</div>
        <div className="border-4 border-r-0">{renderSquare(5)}</div>
        <div className="border-4 border-b-0 border-l-0">{renderSquare(6)}</div>
        <div className="border-4 border-b-0">{renderSquare(7)}</div>
        <div className="border-4 border-b-0 border-r-0">{renderSquare(8)}</div>
      </div>
      <button className="text-[30px]" onClick={restart}>restart</button>
    </div>
  );
}

function Game() {
  return (
    <div>
      <Board />
    </div>
  );
}



// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
