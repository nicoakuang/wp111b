// Function to add two matrices
function matrixAddition(matrix1, matrix2) {
    // Initialize an empty result matrix
    var result = [];

    // Iterate over each row of the matrices
    for (var i = 0; i < matrix1.length; i++) {
        // Initialize an empty row for the result matrix
        var row = [];

        // Iterate over each element in the current row
        for (var j = 0; j < matrix1[i].length; j++) {
            // Add the corresponding elements from matrix1 and matrix2
            var sum = matrix1[i][j] + matrix2[i][j];

            // Append the sum to the current row
            row.push(sum);
        }

        // Append the row to the result matrix
        result.push(row);
    }

    // Return the resulting matrix
    return result;
}

// Test matrices
var matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var matrix2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];

// Perform matrix addition
var resultMatrix = matrixAddition(matrix1, matrix2);

// Print the result matrix
for (var i = 0; i < resultMatrix.length; i++) {
    var rowString = "";

    for (var j = 0; j < resultMatrix[i].length; j++) {
        rowString += resultMatrix[i][j] + " ";
    }

    console.log(rowString);
}