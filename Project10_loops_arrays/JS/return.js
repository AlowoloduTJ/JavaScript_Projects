
function add(a, b) {
      return a + b;
    }

    function subtract(a, b) {
      return a - b;
    }

    function multiply(a, b) {
      return a * b;
    }

    function divide(a, b) {
      if (b === 0) return "Cannot divide by zero";
      return a / b;
    }

    function calculate() {
      let num1 = parseFloat(document.getElementById("num1").value);
      let num2 = parseFloat(document.getElementById("num2").value);
      let operation = document.getElementById("operation").value;
      let result12;

      switch (operation) {
        case "add":
          result12 = add(num1, num2);
          break;
        case "subtract":
          result12 = subtract(num1, num2);
          break;
        case "multiply":
          result12 = multiply(num1, num2);
          break;
        case "divide":
          result12 = divide(num1, num2);
          break;
        default:
          result12 = "Invalid operation";
      }

      document.getElementById("result12").innerHTML = `Result: ${result12}`;
};