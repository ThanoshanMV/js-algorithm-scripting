function factorialize(num) {
    let product =1;
    while(num > 0){
      product *= num;
      num--;
    }
    console.log(product);
    return product;
  }
  
  factorialize(5);