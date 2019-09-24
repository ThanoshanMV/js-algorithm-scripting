function findLongestWordLength(str) {
    let myArray = str.split(" ");
    let maxLength =0;
    for(let i=0; i<myArray.length; i++){
      if(myArray[i].length > maxLength){
        maxLength = myArray[i].length;
      }
      else{
        maxLength = maxLength;
      }
    }
    console.log(maxLength);
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");