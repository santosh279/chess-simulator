import { ChessPieceType, Position } from "../types/chess.types";
import { validatePosition } from "../utils/validator";
import { KingMovement } from "./KingMovement";
import { PawnMovement } from "./PawnMovement";
import { QueenMovement } from "./QueenMovement";

export class ChessMovement {

    calculateMoves(piece: ChessPieceType, position: Position): Position[] {
        validatePosition(position);

        switch(piece) {
            case ChessPieceType.KING:
                return new KingMovement().calculateKingMoves(position);
            case ChessPieceType.QUEEN:
                return new QueenMovement().calculateQueenMoves(position);
            case ChessPieceType.PAWN:
                return new PawnMovement().calculatePawnMoves(position);
            default:
                throw new Error(`Unknown piece: ${piece}`);
        }
    }
}