import { KingMovement } from "./KingMovement";

describe('KingMovement', () => {
    let kingMovement: KingMovement;

    beforeEach(() => {
        kingMovement = new KingMovement();
    });

    test('should return moves for King at E4', () => {
        const position = { column: 'E', row: 4 };
        const moves = kingMovement.calculateKingMoves(position);

        expect(moves).toHaveLength(8);
    });

    test('should return moves for King at A1', () => {
        const position = { column: 'A', row: 1 };
        const moves = kingMovement.calculateKingMoves(position);

        expect(moves).toHaveLength(3);
    });
});