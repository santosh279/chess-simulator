import { validatePosition } from './validator';

describe(('Position validator'), () => {
    test('should validate correct position', () => {
        expect(() => validatePosition({ column: 'D', row: 4})).not.toThrow();
    });

    test('should invalidate incorrect position', () => {
        expect(() => validatePosition({ column: 'Z', row: 4}))
        .toThrow('Invalid position: Z4');
    });
});