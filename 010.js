function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  //return (bool===true || bool===false)? true:false; 
  return typeof bool === "boolean";//The typeof operator returns the type of a variable, object, function or expression.
}

booWho(null);