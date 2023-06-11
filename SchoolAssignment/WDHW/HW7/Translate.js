// Function to translate English month names to numerical representation
function translate(eng) {
    return months[eng];
}

// Object mapping English month names to numerical representations
var months = {
    "January": "1",
    "February": "2",
    "March": "3",
    "April": "4",
    "May": "5",
    "June": "6",
    "July": "7",
    "August": "8",
    "September": "9",
    "October": "10",
    "November": "11",
    "December": "12"
};

// Example translations
console.log(translate("February"));
console.log(translate("March"));
console.log(translate("December"));
