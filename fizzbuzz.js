// FizzBuzz implementation in JavaScript
// Prints numbers from 1 to 100 with Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for multiples of both

function fizzBuzz(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
        throw new Error('Input must be a positive integer.');
    }

    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
}

for (let i = 1; i <= 100; i++) {
    try {
        console.log(fizzBuzz(i));
    } catch (error) {
        console.error(error.message);
    }
}