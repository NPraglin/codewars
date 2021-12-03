// Palindrome checker

function PalindromeTwo(str) { 
  // step 1 using regex, break down the input string into it's base letters without punctuation
  // step 2 using a string reverse and an if statement to evaluate equality, return true or false

  let editedStr = str.replace(/[^A-Za-z]/g, '').toLowerCase()
  
  // to array, reverse, back to string

  let revStr = editedStr.split('').reverse().join('');

  if (editedStr == revStr) { return true } else { return false }

}
   
// keep this function call here 
console.log(PalindromeTwo(readline()));
