// Sort letters in alphabetical order from a given string

function AlphabetSoup(str) { 
  // assess the character codes of each letter, and return them in ascending order
  // use .sort to sort from lowest to highest
  // use a couple for loops to push and add each value onto new variables

  // define empty array to later push char codes onto
  const strCharCodes = [];

  // for loop to add character codes to the empty array
  for (let i = 0; i < str.length; i++) {
    strCharCodes.push(str.charCodeAt(i))
  }  

  // sort those character codes in ascending value
  strCharCodes.sort((a,b) => a - b);

  // define an empty string
  let finalStr = ''

  // another for loop to add the characters correlated to those codes to the new string
  for (let i = 0; i < strCharCodes.length; i++ ){
    finalStr += String.fromCharCode(strCharCodes[i])
  }

  // return and secure the bag
  return finalStr

}
   
// keep this function call here 
console.log(AlphabetSoup(readline()));
