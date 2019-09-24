function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let actualEnd = str.substring(str.length-target.length);
    console.log(actualEnd);
    return (target === actualEnd)? true:false;
    
  }
  
  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");