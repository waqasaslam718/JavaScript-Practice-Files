// let num=[1,2,3,4,5,6,7,8,9];
// console.log(num);
// num.push(10);

// console.log(num);
// num.unshift(0);
// console.log(num);

// let removed=num.pop();
// console.log(num);
// console.log(removed);
// num.shift();
// console.log(num);
// num.indexOf(7);
// console.log(num.indexOf(7));
// using ? oprator
// (age>18)?(true):confirm("Did your parrent Allow");
// using || oprator
// let age=17;
//     function checkage(age)
//     {
//         return age>18 || confirm("Did your parrent Allow");
//     }
// console.log (checkage(age));
        function minmumNumber(num1 , num2)
        {
            return num1>num2?num1:num2
            // if(num1>num2)
            // {
            //     return num2;
            // }
            // return num1
        }
        console.log(minmumNumber(10,5));

        function powerNumber(num , powerNumber)
        {
            return num**powerNumber;
        }
        console.log(powerNumber(6,2));