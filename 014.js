function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
  
    /*Let's check whether the given array is actually an array and if it's an empty array*/ 
    if(Array.isArray(arr) && arr.length > 0){
      for(let i=0; i<arr.length; i++){
       if(arr[i]>arr[i+1]){
        //Let's declare temporary variables called a,b to store array element's value to swap
        let a = arr[i];
        let b = arr[i+1];
        arr[i+1] = a;
        arr[i] = b;
       }
       if(arr[i-1]>arr[i]){
        let a = arr[i-1];
        let b = arr[i];
        arr[i-1] = b;
        arr[i] = a;
       }
     }
     console.log(arr);//logs resulting ascended array
     for(let i=0; i<arr.length; i++){
       if(num-arr[i]<= 0){ //num <= arr[i]
        console.log(i);
        return i;
       }
       if(arr[arr.length-1]<num){
        console.log(arr.length);
        return arr.length;
       }
     }
    }
    /*The given array is not an array or its empty!! */
    else{
      console.log(0);
      return 0;
    }
}
  
getIndexToIns([], 1);
/*Other test cases*/
//getIndexToIns([10, 20, 30, 40, 50], 35);
//getIndexToIns([10, 20, 30, 40, 50], 30);
//getIndexToIns([40, 60], 50);
//getIndexToIns([3, 10, 5], 3);
//getIndexToIns([5, 3, 20, 3], 5);
//getIndexToIns([2, 20, 10], 19);
//getIndexToIns([2, 5, 10], 15);
