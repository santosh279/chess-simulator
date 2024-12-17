export enum ChessPieceType {
    KING = 'King',
    QUEEN = 'Queen',
    PAWN = 'Pawn',
}

export interface Position {
    column: string;
    row: number;
}