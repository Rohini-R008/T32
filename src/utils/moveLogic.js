export const isValidMove = (board, from, to, turn) => {
  const [fr, fc] = from;
  const [tr, tc] = to;

  const piece = board[fr][fc];
  if (!piece || piece.color !== turn) return false;

  const target = board[tr][tc];
  if (target && target.color === turn) return false;

  // Example: Pawn movement
  if (piece.type === "pawn") {
    const direction = piece.color === "white" ? -1 : 1;

    if (fc === tc && !target) {
      if (tr === fr + direction) return true;
    }

    if (Math.abs(tc - fc) === 1 && tr === fr + direction && target) {
      return true;
    }
  }

  return true; // (Extend for all pieces)
};