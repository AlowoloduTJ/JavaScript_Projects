 // ✅ 1. Return true: same data type & same value
    const num1 = 10;
    const num2 = 10;
    document.getElementById("trueCase").textContent =
      `${num1} === ${num2} → ` + (num1 === num2); // true

    // ❌ 2. Return false: different data type & different value
    const val1 = 5;        // number
    const val2 = "7";      // string
    document.getElementById("falseCase1").textContent =
      `${val1} === "${val2}" → ` + (val1 === val2); // false

    // ❌ 3. Return false: different data type but same value
    const val3 = 20;       // number
    const val4 = "20";     // string
    document.getElementById("falseCase2").textContent =
      `${val3} === "${val4}" → ` + (val3 === val4); // false

    // ❌ 4. Return false: same data type but different value
    const val5 = 15;       // number
    const val6 = 25;       // number
    document.getElementById("falseCase3").textContent =
      `${val5} === ${val6} → ` + (val5 === val6); // false
    // == performs type coercion before comparison
    const value1 = 5;       // number
    const value2 = "5";     // string
    const value3 = 10;      // number

    // This will return true because "5" is coerced to 5
    document.getElementById("trueResult").textContent =
      `${value1} == "${value2}" → ` + (value1 == value2);

    // This will return false because 5 is not equal to 10
    document.getElementById("falseResult").textContent =
      `${value1} == ${value3} → ` + (value1 == value3);
function checkLogic() {
      const a = Number(document.getElementById("num1").value);
      const b = Number(document.getElementById("num2").value);

      // Example: false when a is NOT greater than b
      const result = a > b; 

      console.log(result); // Displays true or false
    };
function calculate() {
      const a = Number(document.getElementById("num1").value);
      const b = Number(document.getElementById("num2").value);
      const c = Number(document.getElementById("num3").value);

      // Example operation: (a + b) * c
      const result = (a + b) * c;

      // Log the result in the console
      console.log(`(${a} + ${b}) * ${c} = ${result}`);
    };
function compareNumbers() {
      const a = Number(document.getElementById("num1").value);
      const b = Number(document.getElementById("num2").value);

      // Greater than comparison
      document.getElementById("greater").textContent = a + " > " + b + " : " + (a > b);

      // Less than comparison
      document.getElementById("lesser").textContent = a + " < " + b + " : " + (a < b);
    };
function showInfinity() {
      const pos = Number(document.getElementById("posNum").value);
      const neg = Number(document.getElementById("negNum").value);

      // Multiply each by a very large number to force Infinity / -Infinity
      const posInf = pos * 1e308;  // near max safe range
      const negInf = neg * 1e308;

      document.getElementById("posResult").textContent = "Positive Infinity result: " + (posInf * 2);
      document.getElementById("negResult").textContent = "Negative Infinity result: " + (negInf * 2);
    };
function showResults() {
      const val = document.getElementById("userValue").value;
      let html = "";

      // 1️⃣ Force NaN from input: multiply by a non‑numeric string
      html += `<p>NaN example: ${val * "apple"}</p>`;

      // 2️⃣ isNaN() → true (input is not a number)
      html += `<p>isNaN("Hello") → ${isNaN("Hello")}</p>`;

      // 3️⃣ isNaN() → false (input is a number)
      html += `<p>isNaN(123) → ${isNaN(123)}</p>`;

      document.getElementById("output").innerHTML = html;
    };

function showCoercion() {
  const val1 = document.getElementById("value1").value;
  const val2 = document.getElementById("value2").value;

  // String concatenation (implicit type coercion when using '+')
  const stringConcat = val1 + val2;

  // Numeric addition after converting to numbers
  const numericAddition = Number(val1) + Number(val2);

  // Build result output
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <p><strong>String concatenation:</strong> "${stringConcat}" (type: ${typeof stringConcat})</p>
    <p><strong>Numeric addition:</strong> ${numericAddition} (type: ${typeof numericAddition})</p>
  `;
};

function checkType() {
      let value = document.getElementById("userValue").value;

      // Try to convert to number if possible
      if (!isNaN(value) && value.trim() !== "") {
        value = Number(value);
      }

      document.write("The type of your input is: " + typeof value);
    };
    document.write("O" + 2);
// ---------- AND (&&) ----------
    // True when BOTH conditions are true
    const andResultTrue = (5 > 2) && (10 > 5);      // true
    const andResultFalse = (5 > 2) && (3 > 10);     // false

    document.getElementById("andTrue").textContent =
      `(5 > 2) && (10 > 5) → ${andResultTrue}`;

    document.getElementById("andFalse").textContent =
      `(5 > 2) && (3 > 10) → ${andResultFalse}`;

    // ---------- OR (||) ----------
    // True if AT LEAST ONE condition is true
    const orResultTrue = (5 > 2) || (3 > 10);       // true
    const orResultFalse = (2 > 5) || (3 > 10);      // false

    document.getElementById("orTrue").textContent =
      `(5 > 2) || (3 > 10) → ${orResultTrue}`;

    document.getElementById("orFalse").textContent =
      `(2 > 5) || (3 > 10) → ${orResultFalse}`;
      // Example values
    const isRaining = false;  // Boolean false
    const isSunny = true;     // Boolean true

    // Logical NOT flips the Boolean value
    document.getElementById("notTrue").textContent =
      `!${isRaining} → ${!isRaining}`; // becomes true

    document.getElementById("notFalse").textContent =
      `!${isSunny} → ${!isSunny}`;     // becomes false;