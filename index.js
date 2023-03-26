function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    const lastIndex = word.length - 1 - i;
    if (word[i] !== word[lastIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
   
  split to array
  reverse array.
  join back to string
  compare both strings
  return true if both strings match else false
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;