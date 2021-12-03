// String scramble checker

function StringScramble(str1,str2) { 
  // get character codes of each string, then return the result of an .include() function
  let str1CC = [];
  let str2CC = [];
  let trueFalseArr = [];

  // for loops to push character codes onto the arrays
  for (let i = 0; i < str1.length; i++) {
    str1CC.push(str1.charCodeAt(i))
  }

  for (let i = 0; i < str2.length; i++) {
    str2CC.push(str2.charCodeAt(i))
  }

  // a new array of trues if matches are found within str2/str1;

  for (let i = 0; i < str1CC.length; i++) {
    if (str2CC.includes(str1CC[i])) { trueFalseArr.push('true') } else {  }
  }
  // checking the true count to ensure enough letters match.. all test cases passed my test
  if (str2CC.length <= trueFalseArr.length) { return true } else { return false }
}
   
// keep this function call here 
console.log(StringScramble(readline()));
