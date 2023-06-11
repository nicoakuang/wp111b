// Function to check if a number is prime
function isPrime(n) {
    // Iterate from 2 to the square root of n
    // Check for divisibility of n by each number
    for (var i = 2; i <= Math.sqrt(n); i += (i == 2) ? 1 : 2) {
      // If n is divisible by i, it is not a prime number
      if (n % i == 0) {
        return 0; // Return 0 to indicate not prime
      }
    }
    return 1; // Return 1 to indicate prime
  }
  
  // Test the isPrime function with a specific number
  console.log(isPrime(9973));
  