import { Position } from "../types/chess.types";
import { COLUMNS } from "../utils/constants";
import { isValidPosition } from "../utils/validator";

export class QueenMovement {
    calculateQueenMoves(position: Position): Position[] {
        const moves: Position[] = [];
        const directions = [
            [-1, -1], [-1, 0], [-1, 1], 
            [0, -1], [0, 1], [1, -1], 
            [1, 0], [1, 1]
        ];

        directions.forEach(([row, col]) => {
            let currentRow = position.row;
            let currentColIndex = COLUMNS.indexOf(position.column);

            while(true) {
                currentRow += row;
                currentColIndex += col;

                if(!isValidPosition(currentColIndex, currentRow)) {
                    break;
                }

                moves.push({ 
                    column: COLUMNS[currentColIndex], 
                    row: currentRow 
                });
            }
        });

        return moves;
    }
}