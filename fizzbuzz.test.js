// Jest tests for FizzBuzz implementation
const { execSync } = require('child_process');

// Helper function to run the fizzbuzz.js script and capture output
function runFizzBuzz() {
    const output = execSync('node fizzbuzz.js', { encoding: 'utf-8' });
    return output.trim().split('\n');
}

describe('FizzBuzz Tests', () => {
    let results;

    beforeAll(() => {
        results = runFizzBuzz();
    });

    test('should print Fizz for multiples of 3', () => {
        expect(results[2]).toBe('Fizz'); // 3
        expect(results[5]).toBe('Fizz'); // 6
        expect(results[8]).toBe('Fizz'); // 9
    });

    test('should print Buzz for multiples of 5', () => {
        expect(results[4]).toBe('Buzz'); // 5
        expect(results[9]).toBe('Buzz'); // 10
        expect(results[19]).toBe('Buzz'); // 20
    });

    test('should print FizzBuzz for multiples of 15', () => {
        expect(results[14]).toBe('FizzBuzz'); // 15
    });

    test('should print the number for non-multiples of 3 or 5', () => {
        expect(results[0]).toBe('1'); // 1
        expect(results[1]).toBe('2'); // 2
        expect(results[3]).toBe('4'); // 4
    });

    // Failure cases
    test('should fail if Fizz is not printed for 3', () => {
        expect(results[2]).not.toBe('3');
    });

    test('should fail if Buzz is not printed for 5', () => {
        expect(results[4]).not.toBe('5');
    });
});