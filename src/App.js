import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Chessboard from 'chessboardjsx';

const position = "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2";
const splited = position.split(" ");

function App() {
  return (
    <div className="App">
      <Chessboard position={position} />
      {splited[1] === "w"? 'white move' : 'black move'}
    </div>
  );
}

export default App;
