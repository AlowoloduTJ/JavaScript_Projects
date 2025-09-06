function Call_Loop() {
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `Loop iteration ${i}<br>`;
  }
  document.getElementById("Loop").innerHTML = output;
};