function checkNumber() {
  // Get the value from the input field
  const num = Number(document.getElementById("userNumber").value);

  // If/Else statement to decide the message
  if (num >= 10) {
    document.getElementById("result").textContent = "✅ Your number is 10 or greater!";
  } else {
    document.getElementById("result").textContent = "❌ Your number is less than 10.";
  }
}
