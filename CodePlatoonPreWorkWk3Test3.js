function CountingMinutes(str) { 
  // math style..
  // step 1 initialize a variable at 0 and one at 1440
  // step 2 break the two times into two array items
  // step 3 calculate a number value of each time (array items).. 
  // step 4 subtract the numbers from eachother and the difference from 1440 is the answer

  const minMinutes = 0;
  const maxMinutes = 1440;
  const timeArr = str.match(/(\d+)\:(\d+)(\w+)-(\d+)\:(\d+)(\w+)/)

  let timeOneTotalHrs = timeArr[1] * 60
  let timeOneTotalMin = timeArr[2]
  let timeTwoTotalHrs = timeArr[4] * 60
  let timeTwoTotalMin = timeArr[5]


  if (timeArr[6] === 'pm') { timeOneTotalHrs += 720 }
  if (timeArr[3] === 'pm') { timeOneTotalHrs += 720; timeTwoTotalHrs += 1440}

  let possibleTotal = (timeTwoTotalHrs - timeOneTotalHrs) + (timeTwoTotalMin - timeOneTotalMin)

  if (possibleTotal < 0) { return possibleTotal += maxMinutes} else {return possibleTotal}

}
   
// keep this function call here 
console.log(CountingMinutes(readline()));
