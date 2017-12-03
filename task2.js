//Task2 solution:

const houseRobber = (arr) => {
  if(arr.length < 3)
    return ((arr[1] === undefined) || (arr[0] > arr[1]))? arr[0]: arr[1]
  if(arr.length === 3)
    return ((arr[0] + arr[2]) > arr[1])? arr[0] + arr[2]: arr[1]
  let sum1 = arr[0], sum2 = arr[1];
  let tempSum1 = 0, tempSum2 = 0;
  const recur = (j = 3) => {
    tempSum1 = ((arr[j-1] + sum1) > sum2)? arr[j-1] + sum1: sum2
    tempSum2 = ((arr[j] + sum2) > (arr[j] + sum1))? arr[j] + sum2: arr[j] + sum1
    sum1 = tempSum1
    sum2 = tempSum2
    if(j <= arr.length-3){
      return recur(j+2)
    }   
    else{
      if(j == arr.length-1) {
        return (sum1>sum2)? sum1:sum2
      }
      else { 
        return ((arr[j+1] + sum1)> sum2)? arr[j+1] + sum1: sum2
      }
    }
  }
  return recur(3)
}