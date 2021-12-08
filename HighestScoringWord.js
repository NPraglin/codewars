// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
  // for loop to loop through strings and return character codes into an array, sort the array, and return the last index
  let charCodes = [];
  const xSplit = x.split(' ');
  console.log(xSplit)
  for (let i = 0; i < xSplit.length; i++) {
    let counter = 0;
    for (let n = 0; n < xSplit[i].length; n++) {
      counter += (xSplit[i].charCodeAt(n) - 96)
    }
    charCodes.push(counter)
  }
  const max = Math.max(...charCodes)
  const index = charCodes.indexOf(max)
  
  console.log(charCodes)
  
  return xSplit[index]
}
