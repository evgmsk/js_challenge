// Task1 improved 'some*some' solution:
const checkTwoItemSum = (arr1, arr2, x) => {
  //console.log('res')
  let tempArr1 = arr1.filter(y => y <= x )
  let tempArr2 = arr2.filter(y => y <= x )
  
  //split each array into two parts:
  // we check first(items >= x/2) and second (items > x/2)
  // for the case when each array has a half of X
  let splitedArrs1 = tempArr1.reduce((arg, item) => {
    if(item >= x/2)  
      arg.greater = [...arg.greater, item]
    else 
      arg.lower = [...arg.lower, item]
    return arg;
  }, {greater:[], lower:[]})
  
  let splitedArrs2 = tempArr2.reduce((arg, item) => {
    if(item > x/2) 
      arg.greater = [...arg.greater, item]
    else 
      arg.lower = [...arg.lower, item]
    return arg;
  }, {greater:[], lower:[]})
  console.log(splitedArrs1)
  console.log(splitedArrs2)
  // apply 'some*some' solution to corresponded arrays
  if(splitedArrs1.greater.some(num1 => splitedArrs2.lower.some(num2 => num1 + num2 === x)))
    return true
  else
    return splitedArrs2.greater.some(num1 => splitedArrs1.lower.some(num2 => num1 + num2 === x))
}