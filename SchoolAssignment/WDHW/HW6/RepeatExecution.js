// Function to repeat the execution of a function and store the results
function repeatExecution(func, numTimes) {
    var results = [];

    // Repeat the execution of the function 'numTimes' and store the results in an array
    while (numTimes--) {
        results.push(func());
    }

    return results;
}

// Generate an array of random numbers using the 'repeatExecution' function
var randomNumbers = repeatExecution(Math.random, 10);

// Print each number in the array
for (var i = 0; i < randomNumbers.length; i++) {
    console.log(randomNumbers[i]);
}
