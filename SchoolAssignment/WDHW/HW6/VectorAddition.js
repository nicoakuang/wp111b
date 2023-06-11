// Function to add two vectors
function vectorAddition(a, b) {
    var result = "";

    // Perform element-wise addition of the vectors
    for (var i = 0; i < a.length; i++) {
        result += a[i] + b[i];
        result += " ";
    }

    console.log(result);
}

// Input vectors
let x = [1, 2];
let y = [3, 4];

// Perform vector addition using the 'vectorAddition' function
vectorAddition(x, y);
