//Task3 solution:

const mergeTwoLinkedLists = (arr1, arr2) => {
  let res= [];
  const recurFun = (i = 0, j = 0) => {
   if(i>arr1.length-1) 
     return [...res, ...arr2.slice(j, arr2.length)];
   if(j>arr2.length-1) 
     return [...res, ...arr1.slice(i, arr1.length)];
    if(arr1[i] > arr2[j]) {
      res = [...res, arr2[j]]; 
      ++j;
    }
    else {
      res = [...res, arr1[i]]; 
      ++i;
    }
    return recurFun(i,j)
  }
  return recurFun()
}