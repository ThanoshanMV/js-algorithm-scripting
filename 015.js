function mutation(arr) {
    /*Converting both elements to lower case */
    let firstElemToLower = arr[0].toLowerCase();
    let secondElemToLower = arr[1].toLowerCase();
  
    /*split arry elements into chracters */
    let firstElement = firstElemToLower.split("");
    let secondElement = secondElemToLower.split("");
    let count = 0;
    console.log(firstElement);
    console.log(secondElement);
    for(let i=0; i<secondElement.length; i++){
      for(let j=0; j<firstElement.length; j++){
        if(secondElement[i]===firstElement[j]){
          count++;
          break;
        }
      }
    }
    console.log(count);
    /*If second element's characters all are included in the first array, it should be equal to count */
    return (count===secondElement.length)? true:false;
  }
  
  mutation(["floor", "for"]);
  /*Other test cases */
  //mutation(["hello", "hey"]);
  //mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
  //mutation(["hello", "Hello"]);
  //mutation(["Mary", "Aarmy"]);
  //mutation(["Mary", "Army"]);
  //mutation(["floor", "for"]);
  //mutation(["voodoo", "no"]);