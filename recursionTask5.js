let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
    let arr=[];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
    for (let index = arr.length-1; index >=0; index--) {
      console.log(arr[index]);
        
    }
  
  }
    function printListUsingRecursion(list) {


        if (list.next) {
    printListUsingRecursion(list.next); 
        }
        console.log(list.value);       
    
    }
  
  printListUsingRecursion(list);
  console.log("\n");
  
  printList(list);