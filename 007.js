function repeatStringNumTimes(str, num) {
    // repeat after me
    let arr = [];
    if(num > 0){
      while(num >0){
        arr.push(str);
        num--;
      }
      str = arr.join("");//joining array elements to one string with the seperator of "empty" string.
      console.log(str);
      return str;
    }
    else{
      return "";
    }
  }
  
  repeatStringNumTimes("abc", 4);