// Read values from #num1, #num2, #num3, #num4, #num5, #num6, #num7 and #num8 parse to floats (defaulting to 0)
function getInputs() {
  const a = parseFloat(document.getElementById('num1').value) || 0;
  const b = parseFloat(document.getElementById('num2').value) || 0;
  const c = parseFloat(document.getElementById('num3').value) || 0;
  const d = parseFloat(document.getElementById('num4').value) || 0;
  const e = parseFloat(document.getElementById('num5').value) || 0;
    return { a, b, c, d, e };
}

// Perform addition and display it
function addNumbers() {
  const { a, b, c, d } = getInputs();
  const sum = a + b + c + d;
  document.getElementById('result').textContent = 
    `Sum: ${a} + ${b} + ${c} + ${d}= ${sum}`;
  return sum;
}

// Perform subtraction and display it
function subtractNumbers() {
  const { a, b, c, d } = getInputs();
  const diff = (a + b) -(c +d);
  document.getElementById('result').textContent = 
    `Difference: (${a} + ${b}) and  (${c} + ${d}) = ${diff}`;
  return diff;
}

// Perform multiplication and display it
function multiplyNumbers() {
  const { a, b } = getInputs();
  const product = a * b;
  document.getElementById('result').textContent =
    `Product: ${a} × ${b} = ${product}`;
  return product;
}


// Perform division and display it
function divideNumbers() {
  const { a, b, c, d } = getInputs();
  const divide = (a + b) / (c + d);
  document.getElementById('result').textContent =
    `Division: (${a} + ${b}) / (${c} + ${d}) = ${divide}`;
  return divide;
}

// Perform multiple operations and display it
function BODMAS() {
  const { a, b, c, d, e } = getInputs();
  const BOD_MAS = (a + b) * c - d / e;
  document.getElementById('result').textContent = 
    `Using BODMAS: (${a} + ${b}) × ${c} - ${d} / ${e} = ${BOD_MAS}`;
  return BOD_MAS;
}

// Perform remainder operation and display it
function remNumbers() {
  const { a, b } = getInputs();
  const modulus = a % b;
  document.getElementById('result').textContent =
    `When you divide ${a} by ${b} you have a remainder of = ${modulus}`;
  return modulus;
}
// Perform negation operation and display it
function negNumbers() {
  const { a } = getInputs();
  const negative = -a;
  document.getElementById('result').textContent =
    `When you negate  ${a}  you have  = ${negative}`;
  return negative;
};

function runDemo() {
  // Read and parse input values
  let val     = parseFloat(document.getElementById('initial').value, 10) || 0;
  const incRate = parseFloat(document.getElementById('incRate').value, 10) || 0;
  const incCount= parseInt(document.getElementById('incCount').value, 10) || 0;
  const decRate = parseFloat(document.getElementById('decRate').value, 10) || 0;
  const decCount= parseInt(document.getElementById('decCount').value, 10) || 0;

  // Build output
  let out = `Starting Value: ${val}\n\n`;
  

  // Increment section
  for (let i = 1; i <= incCount; i++) {
    // Use the ++ operator incRate times to achieve the rate
    for (let j = 1; j <= incRate; j++) {
      val++; 
    }
    
    out += `After increment #${i} (+${incRate}): ${val}\n`;
    

  }

  out += `\n`; // blank line separator<

  // Decrement section
  for (let i = 1; i <= decCount; i++) {
    // Use the -- operator decRate times
    for (let j = 1; j <= decRate; j++) {
      val--;
    }
    out += `After decrement #${i} (–${decRate}): ${val}\n`;
  }
  

  // Display the result in the page
  document.getElementById('output').textContent = out;
  container.innerHTML = out.replace(/\n/g, '<br>');
  
};


function generateRandom() {
      const min = Number(document.getElementById("min").value);
      const max = Number(document.getElementById("max").value);

      if (isNaN(min) || isNaN(max)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
      }

      if (min > max) {
        document.getElementById("result").textContent = "First number must be smaller than second number.";
        return;
      }

      // Use Math.random() and Math.floor() to get integer between min and max (inclusive)
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      document.getElementById("result2").textContent =
        `Random number between ${min} and ${max}: ${randomNumber}`;
    };

function showSquareRoot() {
      // Get the input value
      const inputValue = document.getElementById("num").value;
      
      // Convert to number and use Math.sqrt()
      const result = Math.sqrt(Number(inputValue));
      
      // Display the result
      document.getElementById("result3").textContent = 
        `The square root of ${inputValue} is ${result}`;
    }