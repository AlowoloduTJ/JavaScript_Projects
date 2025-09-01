function updateDateTimeAndGreeting() {
  const now = new Date();

  // Format the date and time
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();

  // Display date and time
  document.getElementById("currentDateTime").textContent =
    `Today is ${dateString}, Current time: ${timeString}`;

  // Get current hour
  const hour = now.getHours();
  let message = "";

  // Decide the greeting
  if (hour < 12) {
    message = "Good morning!";
  } else if (hour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  // Display greeting
  document.getElementById("greeting").textContent = message;
}

// Initial run
updateDateTimeAndGreeting();


// Update every second
setInterval(updateDateTimeAndGreeting, 1000);
// 🌍 Global variable (accessible anywhere in the script)
let globalVar = "I am a global variable";

function showVariables() {
  // 📦 Local variable (accessible only inside this function)
  let localVar = "I am a local variable";

  console.log(globalVar); // Accessible here
  console.log(localVar);  // Accessible here
}

showVariables();

// Trying to access localVar outside its scope will cause an error
// console.log(localVar); // ❌ Uncomment to see ReferenceError;
function checkNumber() {
  // Get the value from the input field
  const num = Number(document.getElementById("userNumber").value);

  // If/Else statement to decide the message
  if (num >= 10) {
    document.getElementById("result").textContent = "✅ Your number is 10 or greater!";
  } else {
    document.getElementById("result").textContent = "❌ Your number is less than 10.";
  }
};
function concatenateWords() {
  // Get values from the input fields
  const firstWord = document.getElementById("word1").value;
  const secondWord = document.getElementById("word2").value;
  const thirdWord = document.getElementById("word3").value;
  const fourthWord = document.getElementById("word4").value;

  // Concatenate with a space in between
  const combined = firstWord + " " + secondWord + " " + thirdWord + " " + fourthWord;

  // Display the result
  document.getElementById("result1").textContent = "Concatenated: " + combined;
};

