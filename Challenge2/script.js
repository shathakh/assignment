function findNum (nums){
  for(let i=0 ; i<= nums.length ; ++i){
  let check =  nums.includes(i);
  if(check === false) return i;
  }
  }
  
  let nums =  [9,6,4,2,3,5,7,0,1]
  
  console.log(findNum(nums))