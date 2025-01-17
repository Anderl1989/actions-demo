import { expect, test, describe } from '@jest/globals';
import { divide } from './math.js';

describe('function divide(a, b)', () => {
    test('divide 6 by 2 to equal 3', () => {
        expect(divide(6, 2)).toBe(3);
    });
    
    test('divide 6 by 0 to throw err', () => {
        expect(() => { divide(6, 0); }).toThrow();
    });
    
    test('invalid parameters to throw err', () => {
        expect(() => { divide("6", 0); }).toThrow();
        expect(() => { divide(6, "0"); }).toThrow();
        expect(() => { divide(); }).toThrow();
    });
});