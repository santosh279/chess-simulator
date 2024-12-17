import { Position } from "../types/chess.types";
import { COLUMNS } from "../utils/constants";
import { isValidPosition } from "../utils/validator";

export class KingMovement {
    calculateKingMoves(position: Position): Position[] {
           const moves: Position[] = [];
           const colIndex = COLUMNS.indexOf(position.column);
   
           for(let rowOffSet = -1; rowOffSet <= 1; rowOffSet++) {
               for(let colOffSet = -1; colOffSet <= 1; colOffSet++) {
   
                   if(rowOffSet === 0 && colOffSet === 0) continue;
   
                   const newRow = position.row + rowOffSet;
                   const newCol = colIndex + colOffSet;
   
                   if(isValidPosition(newCol, newRow)) {
                       moves.push({ 
                           column: COLUMNS[newCol], 
                           row: newRow 
                       });
                   }
               }
           }
           return moves;
       }
}