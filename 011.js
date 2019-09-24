function titleCase(str) {
    let allLower = str.toLowerCase(); //converts all charcters to lowercase.
    console.log(allLower);
    let myArray = allLower.split(" ");//Makes array of words
    for(let i=0; i<myArray.length; i++){
      let firstLrtCap =myArray[i].charAt(0).toUpperCase();
      myArray[i] = firstLrtCap + myArray[i].substring(1);//Assigning elements with a fisrt letter Cap while others lower in each word!
      console.log(myArray[i]);
    }
    str = myArray.join(" ");//Reassigning array elements to str again!!
    console.log(str);
    return str;
  }
  
  titleCase("I'm a little tea pot");