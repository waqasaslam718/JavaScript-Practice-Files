// let str = `Hello`;

// // the first character
// alert( str[0] ); // H
// alert( str.at(0) ); // H

// // the last character
// alert( str[str.length - 1] ); // o
// alert( str.at(-1) );
// str="Waqas";
// alert( 'Interface'[0].toLowerCase()+ str ); // 'i'
// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; // let's look for it

// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) { break; }

//     console.log(`Found at ${foundPos}`);
//     pos = foundPos + 1; // continue the search from the next position
// }

// Task1

// function ucFirst(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
  
// } 
// console.log(ucFirst("waqas")==("Waqas")); // Waqas


// Task2
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
  
//     return lowerStr.includes('waqas') || lowerStr.includes('awais');
//   }
  
//   console.log( checkSpam(' i am waqas') );
//   console.log( checkSpam('he is awais') );
//   console.log( checkSpam("innocent rabbit") );

// // task 3
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

  console.log( truncate('Hello', 10) );
// task 4
function extractCurrencyValue(str) {
    return str.slice(1);
  }

  console.log( extractCurrencyValue('$123.45') ); // 123.45