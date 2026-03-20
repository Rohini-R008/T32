import React from "react";
import Square from "./Square";

const Board = ({ board, onSquareClick }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 60px)" }}>
      {board.map((row, r) =>
        row.map((piece, c) => {
          const isDark = (r + c) % 2 === 1;

          return (
            <Square
              key={`${r}-${c}`}
              piece={piece}
              isDark={isDark}
              onClick={() => onSquareClick(r, c)}
            />
          );
        })
      )}
    </div>
  );
};

export default Board;