import { QueenMovement } from "./QueenMovement";

describe('QueenMovement', () => {
    let queenMovement: QueenMovement;

    beforeEach(() => {
        queenMovement = new QueenMovement();
    });

    test('should return all moves positions for Queen at E4', () => {
        const position = { column: 'E', row: 4 };
        const moves = queenMovement.calculateQueenMoves(position);

        expect(moves).toHaveLength(27);
    });

    test('should return all moves positions for Queen at A1', () => {
        const position = { column: 'A', row: 1 };
        const moves = queenMovement.calculateQueenMoves(position);

        expect(moves).toHaveLength(21);
    });
});