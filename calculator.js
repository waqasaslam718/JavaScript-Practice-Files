let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = 15
      this.b = 15
    }
  };
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );