import { ChessPieceType, Position } from "../types/chess.types";
import { ChessMovement } from "./ChessMovement";

describe('ChessMovement', () => {
    let chessMovement: ChessMovement;

    beforeEach(() => {
        chessMovement = new ChessMovement();
    });

    test('should calculate moves for king', () => {
        const position: Position = { column: 'D', row: 5 };
        const moves = chessMovement.calculateMoves(ChessPieceType.KING, position);
        expect(moves).toHaveLength(8);
    });

    test('should calculate moves for queen', () => {
        const position: Position = { column: 'D', row: 5 };
        const moves = chessMovement.calculateMoves(ChessPieceType.QUEEN, position);
        expect(moves).toHaveLength(27);
    });

    test('should calculate moves for pawn', () => {
        const position: Position = { column: 'G', row: 1 };
        const moves = chessMovement.calculateMoves(ChessPieceType.PAWN, position);
        expect(moves).toEqual([{ column: 'G', row: 2 }]);
    });

    test('should throw an error for unknown piece', () => {
        const position: Position = { column: 'G', row: 1 };
        expect(() => chessMovement
        .calculateMoves('TEST_Kinggg' as ChessPieceType, position))
        .toThrow('Unknown piece: TEST_Kinggg');
    });
});
