<--
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
-->

function persistence(num) {
  // initialize i at 0.. while the length is not 1..  
  let i = 0; while (num.toString().length !== 1) {
  // multiply the accumulator and current value to together and reassign to num then repeat until loop stops at length 1
    num = num.toString().split('').reduce((a,b) => a*b);
  // increment i each iteration to count how many loops
    i++
  }
  // return i to show the amount of instances occurred that we multiplied num
  return i
}
