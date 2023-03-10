import { getPercents } from '../percent';

describe('test for percent.js', () => {
    it('should display a percentage of integer', () => {
        expect(getPercents(30, 200)).toBe(60);
    });
    it('should display a percentage of non-integer', () => {
        expect(getPercents(10, 150.5)).toBe(15.05);
    });
    it('should display a non-integer percentage', () => {
        expect(getPercents(50.5, 300)).toBe(151.5);
    });
    it('test failure', () => {
        expect(getPercents('O', 100)).toBe(NaN);
    });
    it('corner-case', () => {
        expect(getPercents(-1, 500)).toBe(-5);
    });
})