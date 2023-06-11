// Function to generate a truth table with n columns
// s is a string representing the current row in the truth table (default is an empty string)
function truthTable(n, s = "") {
    // Create a new string by appending "0" to the current row
    var a = s + "0";

    // Create another string by appending "1" to the current row
    var b = s + "1";

    // If n is 0, print the current row
    if (n === 0) {
        console.log(s);
    } else {
        // Recursively generate the truth table for n-1 columns with string a
        truthTable(n - 1, a);

        // Recursively generate the truth table for n-1 columns with string b
        truthTable(n - 1, b);
    }
}

// Generate a truth table with 10 columns
truthTable(10);
