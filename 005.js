function largestOfFour(arr) {
    // You can do this!
    let largestNumArray =[];
    for(let i=0; i<arr.length; i++){
      let largestNumber = arr[i][0];
      for(let j=0; j<arr[i].length; j++){
        if(arr[i][j] > largestNumber){
          largestNumber = arr[i][j];
        }
        else{
          largestNumber = largestNumber;
        }
      }
      largestNumArray[i]= largestNumber;
    }
    console.log(largestNumArray);
    return largestNumArray;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);