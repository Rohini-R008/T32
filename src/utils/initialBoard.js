export const initialBoard = () => {
  const board = Array(8).fill(null).map(() => Array(8).fill(null));

  const backRow = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

  // Black pieces
  for (let i = 0; i < 8; i++) {
    board[0][i] = { type: backRow[i], color: "black" };
    board[1][i] = { type: "pawn", color: "black" };
  }

  // White pieces
  for (let i = 0; i < 8; i++) {
    board[6][i] = { type: "pawn", color: "white" };
    board[7][i] = { type: backRow[i], color: "white" };
  }

  return board;
};