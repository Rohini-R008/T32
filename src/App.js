import React, { useState } from "react";
import Board from "./components/Board";
import { initialBoard } from "./utils/initialBoard";
import { isValidMove } from "./utils/moveLogic";
import Timer from "./components/Timer";

function App() {
  const [board, setBoard] = useState(initialBoard());
  const [selected, setSelected] = useState(null);
  const [turn, setTurn] = useState("white");
  const [moves, setMoves] = useState([]);

  const handleClick = (r, c) => {
    if (!selected) {
      setSelected([r, c]);
      return;
    }

    if (isValidMove(board, selected, [r, c], turn)) {
      const newBoard = board.map(row => [...row]);
      newBoard[r][c] = newBoard[selected[0]][selected[1]];
      newBoard[selected[0]][selected[1]] = null;

      setBoard(newBoard);

      const moveNotation = `${String.fromCharCode(97 + c)}${8 - r}`;
      setMoves([...moves, moveNotation]);

      setTurn(turn === "white" ? "black" : "white");
    }

    setSelected(null);
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Board board={board} onSquareClick={handleClick} />

      <div>
        <h3>Turn: {turn}</h3>
         <h3>White Timer</h3>
      <Timer active={turn === "white"} />

      <h3>Black Timer</h3>
      <Timer active={turn === "black"} />
        <h3>Moves:</h3>
        <ul>
          {moves.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
