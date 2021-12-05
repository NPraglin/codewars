// CaesarCipher function taking a string and a number input

function CaesarCipher(str,num) { 
  // for loop making an array of character codes
  // for loop making a new array of the adjusted character codes
  // make boundaries for character codes
  let initialCharCodeArr = [];
  let returnedCharCodeArr = [];
  for (let i = 0; i < str.length; i++) {
    returnedCharCodeArr.push(str.charCodeAt(i) + num)
  }

  for (let i = 0; i < returnedCharCodeArr.length; i++) {
    if (returnedCharCodeArr[i] > 122 ) returnedCharCodeArr[i] -= 26
    if (returnedCharCodeArr[i] > 90 && 97 > returnedCharCodeArr[i]) returnedCharCodeArr[i] -= 26
    if (returnedCharCodeArr[i] < 65) returnedCharCodeArr[i] -= num
  }

  let returnedStr = ''
  for (let i = 0; i < returnedCharCodeArr.length; i++) {
    returnedStr += (String.fromCharCode(returnedCharCodeArr[i]))
  }
  return returnedStr

}
   
// keep this function call here 
console.log(CaesarCipher(readline()));
