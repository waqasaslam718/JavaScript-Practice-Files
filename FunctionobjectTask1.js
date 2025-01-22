function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
    counter.decrease =  () => count--;
    counter.set = value => count = value;
  
   
  
    return counter;
  }

  let counter = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1
  counter.set(5);
console.log(counter()); // 2