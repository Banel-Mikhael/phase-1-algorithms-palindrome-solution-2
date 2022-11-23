function isPalindrome(word) {
  // convert string to an array and splits the word for seperate letters
  const arrayValues = word.split("");
  // reverse the array values or the letters
  const reverseArrayValues = arrayValues.reverse();
  // convert the array to string nad put them together
  const reverseString = reverseArrayValues.join("");

  //  make a condition
  //  to check if the wanted word is the same is the reverced word we made if true its palindrome if not it not palindrom
  if (word == reverseString) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
   1-take whole word
  2-split whole word to pieces so you can use word by word
  3-reverse the chars u splited 
  4-put the reversed chars together 
  5-make a condition to see if main word is equal too reversed word if true its palindrome if not its not palindrome
*/

/*
  Add written explanation of your solution here
  we have to split the word given by the user and split it into several letters to let us iterate over the whole word and try
  to make a first condition to check if the first letter is equal to last letter and with the reverse built in function we reverse the whole
  word so that how we compare between main word and reversed word if both are same it will be a palindrome word
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
