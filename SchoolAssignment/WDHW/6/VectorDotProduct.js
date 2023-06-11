// Function to calculate the dot product of two vectors
function vectorDotProduct(a, b) {
    var result = 0;

    // Perform element-wise multiplication and accumulate the sum
    for (var i = 0; i < a.length; i++) {
        result += a[i] * b[i];
    }

    console.log(result);
}

// Input vectors
let x = [1, 2];
let y = [3, 4];

// Perform dot product calculation using the 'vectorDotProduct' function
vectorDotProduct(x, y);
