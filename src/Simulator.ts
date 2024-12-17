import { ChessMovement } from "./movements/ChessMovement";
import { ChessPieceType } from "./types/chess.types";

export class Simulator {
    private movement: ChessMovement;

    constructor() {
        this.movement = new ChessMovement();
    }

    getPossibleMoves(pieceStr: string, position: string): string[] {
        const piece = this.validateAndParsePiece(pieceStr);
        const pos = this.parsePosition(position);

        return this.movement
            .calculateMoves(piece, pos)
            .map(p => `${p.column}${p.row}`)
            .sort();
    }

    private validateAndParsePiece(pieceStr: string): ChessPieceType {
        if(!Object.values(ChessPieceType).includes(pieceStr as ChessPieceType)) {
            throw new Error(`Unknown piece: ${pieceStr}`);
         }
        return pieceStr as ChessPieceType;
    }

    private parsePosition(position: string) {
        if(!/^[A-H][1-8]$/.test(position)) {
            throw new Error(`Invalid position format: ${position}`);
        }

        return {
            column: position[0],
            row: parseInt(position[1], 10)
        }
    }
}