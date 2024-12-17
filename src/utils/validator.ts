import { Position } from "../types/chess.types";
import { COLUMNS } from "./constants";

export function validatePosition(position: Position) {
    if(!COLUMNS.includes(position.column) 
        || (position.row < 1 || position.row > 8)) {
        throw new Error(`Invalid position: ${position.column}${position.row}`);
    }
 }

export function isValidPosition(colIndex: number, row: number): boolean {
    return colIndex >= 0 && colIndex < COLUMNS.length && row >= 1 && row <= 8;
 }