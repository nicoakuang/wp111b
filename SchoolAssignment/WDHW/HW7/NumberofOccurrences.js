function countOccurrences(list) {
    let occurrences = {}; // Create an empty object to store the occurrences
  
    for (let item of list) {
      if (item in occurrences) {
        // If the item is already a key in the occurrences object,
        // increment its count by 1
        occurrences[item]++;
      } else {
        // If the item is not a key in the occurrences object,
        // add it as a key with a count of 1
        occurrences[item] = 1;
      }
    }
  
    return occurrences; // Return the occurrences object
  }
  
  let list = ['a', 'dog', 'chase', 'a', 'cat'];
  console.log(countOccurrences(list));
  