function chunkArrayInGroups(arr, size) {
    // Break it up.
    let myArray = [];
    for(let i=0 ;i<arr.length; i+=size){
      let tempArray =arr.slice(i,i+size); //tempArray equals [i,(i+size)-1]
      console.log(tempArray);
      myArray.push(tempArray);//We're pushing tempArray into myArray. Each time it pushes the values as arrays. So at the end, myArray will be a nested array. 
    }
    console.log(myArray);
    return myArray;
}
  
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
//chunkArrayInGroups(["a", "b", "c", "d"], 2);
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);