function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let firstArray = arr1.slice(0);//We're copying arr1 to firstArray
    console.log(firstArray);
    let secondArray = arr2.slice(0);//We're copying arr2 to secondArray
    console.log(secondArray);
    secondArray.splice(n,0,...firstArray);//We're inserting our fisrtArray at the nth index. Notice we have used the spread operator to insert elemnts in the secondArray.
    console.log(secondArray);
    return secondArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);