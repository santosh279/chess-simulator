import { Position } from "../types/chess.types";

export class PawnMovement {
    calculatePawnMoves(position: Position): Position[] {
        const nextRow = position.row + 1;
        return nextRow <= 8 
        ? [{ column: position.column, row: nextRow }] 
        : [];
    }
}