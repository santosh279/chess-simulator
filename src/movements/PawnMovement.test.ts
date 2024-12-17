import { Position } from "../types/chess.types";
import { PawnMovement } from "./PawnMovement";

describe('PawnMovement', () => {
    let pawnMovement: PawnMovement;

    beforeEach(() => {
        pawnMovement = new PawnMovement();
    });

    test('should return vertical forward move for a Pawn', () => {
        const position: Position = { column: 'G', row: 1 };
        const moves = pawnMovement.calculatePawnMoves(position);

        expect(moves).toEqual([{ column: 'G', row: 2 }]);
    });

    test('should return empty array if Pawn is at the last row', () => {
        const position: Position = { column: 'A', row: 8 };
        const moves = pawnMovement.calculatePawnMoves(position);

        expect(moves).toHaveLength(0);
    });
});