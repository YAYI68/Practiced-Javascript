function* count_up(max){
    let count =1;
    while(count<max){
      yield count
      count++;
    }
  }
  
  c = count_up(10)
//   c.next()
// c.return(5).value
  for (let value of c){
    console.log(value)
  }


  function *main(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 4
  }

  var it = main();
  it.next();
  it.next();
  it.next();
  it.next();

// Or 
  [...main()]



