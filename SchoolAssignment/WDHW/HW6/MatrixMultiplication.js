// Function to multiply two matrices
function matrixMultiplication(matrix1, matrix2) {
    // Initialize a variable to store the intermediate result
    var sum = 0;
  
    // Initialize an empty result matrix
    var result = [];

    // Iterate over each row of matrix1
    for (var i = 0; i < matrix1.length; i++) {
        // Initialize an empty row for the result matrix
        var row = [];

        // Iterate over each column of matrix2
        for (var j = 0; j < matrix2[0].length; j++) {
            sum = 0;

            // Perform dot product of the current row of matrix1 and current column of matrix2
            for (var k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }

            // Append the dot product to the current row
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

// Perform matrix multiplication
var resultMatrix = matrixMultiplication(matrix1, matrix2);

// Print the result matrix
for (var i = 0; i < resultMatrix.length; i++) {
    var rowString = "";

    for (var j = 0; j < resultMatrix[i].length; j++) {
        rowString += resultMatrix[i][j] + " ";
    }

    console.log(rowString);
}
