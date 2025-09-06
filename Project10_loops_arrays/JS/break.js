
    function runLoop() {
      let result = "";

      for (let i = 1; i <= 10; i++) {
        if (i === 3) {
          result += "Skipping 3<br>";
          continue; // Skip this iteration
        }

        if (i === 8) {
          result += "Breaking at 8<br>";
          break; // Exit the loop
        }

        result += `Number: ${i}<br>`;
      }

      document.getElementById("output").innerHTML = result;
    }