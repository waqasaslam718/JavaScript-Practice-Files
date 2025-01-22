let user = { name: "John", years: 30 };

 let{name,years:age,isAdmin=true} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  console.log(topSalary(salaries)); // John