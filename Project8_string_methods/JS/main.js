document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('concatForm');
  const str1 = document.getElementById('str1');
  const str2 = document.getElementById('str2');
  const str3 = document.getElementById('str3');
  const resultDiv = document.getElementById('result');
  const clearBtn = document.getElementById('clearBtn');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const s1 = str1.value.trim();
    const s2 = str2.value.trim();
    if (!s1 || !s2) {
      resultDiv.textContent = 'Please fill in both required fields.';
      return;
    }

    // Build an array of all non-empty inputs
    const parts = [s1, s2];
    const optional = str3.value.trim();
    if (optional) parts.push(optional);

    // Use concat() to join them
    const result = parts.shift().concat(...parts);

    resultDiv.textContent = `Result: "${result}"`;
  });

  clearBtn.addEventListener('click', () => {
    form.reset();
    resultDiv.textContent = '';
    str1.focus();
   });
});

document.addEventListener('DOMContentLoaded', () => {
  const convertBtn = document.getElementById('convertBtn');
  const result3Div = document.getElementById('result3');
  convertBtn.addEventListener('click', () => {
    const inputText = document.getElementById('textInput').value;
    const upperText = inputText.toUpperCase();

    result3Div.textContent = `Uppercase: "${upperText}"`;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchBtn');
  const result4Div = document.getElementById('result4');

  searchBtn.addEventListener('click', () => {
    const mainText = document.getElementById('mainText').value;
    const searchTerm = document.getElementById('searchTerm').value;

    if (!mainText || !searchTerm) {
      resultDiv.textContent = "⚠️ Please enter both the main text and the search term.";
      return;
    }

    // Use search() method
    const position = mainText.search(searchTerm);

    if (position === -1) {
      result4Div.textContent = `Term not found in the text.`;
    } else {
      result4Div.textContent = `Found at index: ${position}`;
    }
  });
});function convertNumberToString() {
            // Get the value from the input field
            const numberInput = document.getElementById('numberInput').value;

            // Convert the input value to a number
            const number = Number(numberInput);

            // Check if the input is a valid number
            if (!isNaN(number)) {
                // Convert the number to a string using toString()
                const stringResult6 =number.toString();

                // Display the result
                document.getElementById('result6').innerText = `The number ${number} as a string is: "${stringResult}"`;
            } else {
                // Display an error message if input is invalid
                document.getElementById('result6').innerText = 'Please enter a valid number.';
            }
        };
        
        function calculateWithPrecision() {
            // Retrieve input values
            const num1 = parseFloat(document.getElementById('number1').value);
            const num2 = parseFloat(document.getElementById('number2').value);
            const precision = parseInt(document.getElementById('precision').value);
            const operation = document.getElementById('operation').value;

            // Validate inputs
            if (isNaN(num1) || isNaN(num2) || isNaN(precision)) {
                displayResult6('Please enter valid numbers', 'error');
                return;
            }

            // Validate precision range
            if (precision < 1 || precision > 15) {
                displayResult6('Precision must be between 1 and 15', 'error');
                return;
            }

            // Perform calculation based on selected operation
            let result6;
            switch (operation) {
                case 'add':
                    result6 = num1 + num2;
                    break;
                case 'subtract':
                    result6 = num1 - num2;
                    break;
                case 'multiply':
                    result6 = num1 * num2;
                    break;
                case 'divide':
                    // Check division by zero
                    if (num2 === 0) {
                        displayResult('Cannot divide by zero', 'error');
                        return;
                    }
                    result6 = num1 / num2;
                    break;
            }

            // Apply toPrecision() method
            const precisionResult6 = result6.toPrecision(precision);

            // Display result with detailed information
            displayResult6(`
                Operation: ${num1} ${getOperationSymbol(operation)} ${num2}
                Result6: ${precisionResult6}
                Precision: ${precision} significant digits
            `);
        }

        function getOperationSymbol(operation) {
            const symbols = {
                'add': '+',
                'subtract': '-',
                'multiply': '*',
                'divide': '/'
            };
            return symbols[operation];
        }

        function displayResult6(message, type = 'success') {
            const result6Div = document.getElementById('result6');
            result6Div.textContent = message;
            resul6tDiv.style.color = type === 'error' ? 'red' : 'black';
        };
document.addEventListener('DOMContentLoaded', () => {
  const formatBtn = document.getElementById('formatBtn');
  const result9Div = document.getElementById('result');

  formatBtn.addEventListener('click', () => {
    const numberValue = parseFloat(document.getElementById('numberInput').value);
    const decimalPlaces = parseInt(document.getElementById('decimalPlaces').value);

    if (isNaN(numberValue) || isNaN(decimalPlaces)) {
      result9Div.textContent = "⚠️ Please enter a valid number and decimal place.";
      return;
    }

    const formatted = numberValue.toFixed(decimalPlaces);
    result9Div.textContent = `Formatted result9: ${formatted}`;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const valueBtn = document.getElementById('valueBtn');
  const result10Div = document.getElementById('result10');

  valueBtn.addEventListener('click', () => {
    const rawInput = document.getElementById('inputValue').value;

    // Try to interpret input as a number first
    let primitive;
    if (!isNaN(rawInput) && rawInput.trim() !== "") {
      const numObj = new Number(rawInput);
      primitive = numObj.valueOf(); // returns number
    } else {
      const strObj = new String(rawInput);
      primitive = strObj.valueOf(); // returns string
    }

    result10Div.textContent = `Primitive value: ${primitive} (${typeof primitive})`;
  });
});
