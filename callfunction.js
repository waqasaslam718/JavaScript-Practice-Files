let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
     
      console.log("Called with " + x);
      return x * worker.someMethod(); // (*)
    }
  };
  
 
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func(x); // (**)
      cache.set(x, result);
      return result;
    };
  }
  
  console.log( worker.slow(1) ); // the original method works
  
  worker.slow = cachingDecorator(worker.slow); // now make it caching
     console.log( worker.slow(2) );