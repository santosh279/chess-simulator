import { Simulator } from './Simulator';

describe('Simulator', () => {
    let simulator: Simulator;

    beforeEach(() => {
        simulator = new Simulator();
    });

    test('should get possible king moves', () => {
        const moves = simulator.getPossibleMoves('King', 'D5');
        expect(moves).toEqual(['C4', 'C5', 'C6', 'D4', 'D6', 'E4', 'E5', 'E6']);
    });

    test('should get possible queen moves', () => {
        const moves = simulator.getPossibleMoves('Queen', 'E4');
        expect(moves).toHaveLength(27);
    });

    test('should get possible pawn moves', () => {
        const moves = simulator.getPossibleMoves('Pawn', 'G1');
        expect(moves).toEqual(['G2']);
    });

    test('should throw an error for invalid piece', () => {
        expect(() =>  simulator.getPossibleMoves('TEST_Kinggg', 'D5'))
        .toThrow('Unknown piece: TEST_Kinggg');
    });

    test('should throw an error for invalid position', () => {
        expect(() => simulator.getPossibleMoves('Pawn', 'Z1'))
        .toThrow('Invalid position format: Z1');
    });
});