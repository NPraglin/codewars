// You are provided a 2 dimensional array. You must test if each value within the sub arrays is larger than the given test value n.
// Return true if so, false if not.
// Code length limit : *** 60 characters ***

function everyEvery(a,n){
  const test = (a.join(',').split(','))
  for (let i = 0; i < test.length; i++) 
    if ( test[i] < n) 
    { return false} else 
    { return true }
  }
