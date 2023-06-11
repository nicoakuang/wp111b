// Function to calculate the Fibonacci sequence of a given number n
function fibonacci(n) {
    // Base case: If n is 1 or 2, return 1
    if (n === 1 || n === 2) {
        return 1;
    }
    // Recursive case: Calculate the Fibonacci number by summing the previous two numbers in the sequence
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Calculate the Fibonacci number for n = 40
console.log(fibonacci(40));
