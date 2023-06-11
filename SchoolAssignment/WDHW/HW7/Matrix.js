class Matrix {
    constructor(matrix) {
      this.matrix = matrix; // Store the matrix in the object's property
    }
  
    // Method to add another matrix to the current matrix
    add(otherMatrix) {
      const result = []; // Initialize an empty array to store the result
  
      for (let i = 0; i < this.matrix.length; i++) {
        const row = []; // Initialize an empty array to store each row of the result
  
        for (let j = 0; j < this.matrix[i].length; j++) {
          row.push(this.matrix[i][j] + otherMatrix.matrix[i][j]); // Add corresponding elements and push to the row array
        }
  
        result.push(row); // Push the row to the result array
      }
  
      return new Matrix(result); // Create a new Matrix object with the result array and return it
    }
  
    // Method to multiply the current matrix with another matrix
    multiply(otherMatrix) {
      const result = []; // Initialize an empty array to store the result
  
      for (let i = 0; i < this.matrix.length; i++) {
        const row = []; // Initialize an empty array to store each row of the result
  
        for (let j = 0; j < otherMatrix.matrix[0].length; j++) {
          let sum = 0; // Initialize a variable to store the sum of products
  
          for (let k = 0; k < this.matrix[i].length; k++) {
            sum += this.matrix[i][k] * otherMatrix.matrix[k][j]; // Multiply corresponding elements and add to the sum
          }
  
          row.push(sum); // Push the sum to the row array
        }
  
        result.push(row); // Push the row to the result array
      }
  
      return new Matrix(result); // Create a new Matrix object with the result array and return it
    }
  }
  
  // Create two matrix objects
  const matrix1 = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  const matrix2 = new Matrix([[9, 8, 7], [6, 5, 4], [3, 2, 1]]);
  
  // Add the matrices and print the result
  const matrixSum = matrix1.add(matrix2);
  console.log("Matrix Sum:");
  console.log(matrixSum.matrix);
  
  console.log();
  
  // Multiply the matrices and print the result
  const matrixProduct = matrix1.multiply(matrix2);
  console.log("Matrix Product:");
  console.log(matrixProduct.matrix);
  