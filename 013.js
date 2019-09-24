function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let myArray =[];
    for(let i=0; i<arr.length; i++){
      if(Boolean(arr[i])){ //We're converting each element to boolean value(type conversion). If the resulting boolean value isn't a falsy value, the inner statement will get executed!.
        myArray.push(arr[i]);
      }
    }
    console.log(myArray);
    return myArray;
  }
  
  bouncer([7, "ate", "", false, 9]);