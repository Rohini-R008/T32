import React from "react";

const Square = ({ piece, onClick, isDark }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: isDark ? "#b58863" : "#f0d9b5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        cursor: "pointer"
      }}
    >
      {piece && getPieceSymbol(piece)}
    </div>
  );
};

const getPieceSymbol = (piece) => {
  const symbols = {
    king: "♔",
    queen: "♕",
    rook: "♖",
    bishop: "♗",
    knight: "♘",
    pawn: "♙"
  };

  return piece.color === "white"
    ? symbols[piece.type]
    : symbols[piece.type].toLowerCase();
};

export default Square;