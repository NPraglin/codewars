// Fibonacci Checker

function FibonacciChecker(num) { 
  // declare the array to begin the fib sequence
  let fibonacci = [0, 1];
    for (let i = 1; i < num; i++) {
      fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }
  // if statement returnin true or false. .includes returns true or false
  if (fibonacci.includes(num)) { return 'yes'} else { return 'no'}
}
   
// keep this function call here 
console.log(FibonacciChecker(readline()));
