function reverseString(str) {
    let myArray = str.split("");
    myArray.reverse();
    console.log(myArray);
    str = myArray.join("");
    console.log(str);
    return str;
  }
  
  reverseString("hello");