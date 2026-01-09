// Jest tests for FizzBuzz implementation
const { execSync } = require('child_process');

// Helper function to run the fizzBuzz function with a specific input
function runFizzBuzz(input) {
    try {
        const output = execSync(`node -e "console.log(require('./fizzbuzz.js').fizzBuzz(${input}))"`, { encoding: 'utf-8' });
        return output.trim();
    } catch (error) {
        return error.message;
    }
}

describe('FizzBuzz Tests', () => {
    test('should return Fizz for multiples of 3', () => {
        expect(runFizzBuzz(3)).toBe('Fizz');
        expect(runFizzBuzz(6)).toBe('Fizz');
    });

    test('should return Buzz for multiples of 5', () => {
        expect(runFizzBuzz(5)).toBe('Buzz');
        expect(runFizzBuzz(10)).toBe('Buzz');
    });

    test('should return FizzBuzz for multiples of 15', () => {
        expect(runFizzBuzz(15)).toBe('FizzBuzz');
        expect(runFizzBuzz(30)).toBe('FizzBuzz');
    });

    test('should return the number for non-multiples of 3 or 5', () => {
        expect(runFizzBuzz(1)).toBe('1');
        expect(runFizzBuzz(2)).toBe('2');
    });

    test('should throw an error for invalid inputs', () => {
        expect(runFizzBuzz(-1)).toMatch(/Input must be a positive integer/);
        expect(runFizzBuzz(0)).toMatch(/Input must be a positive integer/);
        expect(runFizzBuzz('abc')).toMatch(/Input must be a positive integer/);
    });
});