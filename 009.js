function findElement(arr, func) {
    let num = 0;
    for(let i=0; i<arr.length; i++){
      num = arr[i];
      if(func(num)){  //We're passing num as a argument to the 'func' function since the 'func' function deals with parameter.
        console.log(num);
        return num;
      }
      else{
        continue;
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);