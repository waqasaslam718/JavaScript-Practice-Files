// Constructor function for Calculator
function Calculator() {
    // Object to store operations
    this.operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    };
  
    // Method to calculate the result from a string
    this.calculate = function (str) {
      const parts = str.split(" "); // Split the string by space
  
      if (parts.length !== 3) {
        throw new Error("Invalid input format. Expected format: 'NUMBER operator NUMBER'");
      }
  
      const a = parseFloat(parts[0]);
      const operator = parts[1];
      const b = parseFloat(parts[2]);
  
      if (isNaN(a) || isNaN(b)) {
        throw new Error("Invalid numbers in the input string.");
      }
  
      const operation = this.operations[operator];
  
      if (!operation) {
        throw new Error(`Operation '${operator}' is not supported.`);
      }
  
      return operation(a, b);
    };
  
    // Method to add a new operation
    this.addMethod = function (name, func) {
      if (typeof func !== "function") {
        throw new Error("The second argument must be a function.");
      }
      this.operations[name] = func;
    };
  }
  
  // Example usage
  let calc = new Calculator();
  
  console.log(calc.calculate("3 + 7")); // 10
  console.log(calc.calculate("10 - 4")); // 6
  
  let powerCalc = new Calculator();
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);
  
  console.log(powerCalc.calculate("2 ** 3")); // 8
  console.log(powerCalc.calculate("6 * 7")); // 42
  console.log(powerCalc.calculate("10 / 2")); // 5
  