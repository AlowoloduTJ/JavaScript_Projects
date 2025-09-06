function Call_Loop() {
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += `Loop iteration ${i}\n`;
  }
  document.getElementById("loop").textContent = output;
};
 function checkLength() {
      const input = document.getElementById('textInput').value;
      const length = input.length;
      document.getElementById('result').textContent = `Length: ${length} character${length !== 1 ? 's' : ''}`;
};
function for_Loop() {
      const instruments = [
        "Guitar",
        "Piano",
        "Violin",
        "Drums",
        "Flute",
        "Saxophone",
        "Trumpet",
        "Cello"
      ];

      let output = "";
      for (let i = 0; i < instruments.length; i++) {
        output += instruments[i] + "<br>";
      }

      document.getElementById("List_Of-instruments").innerHTML = output;
    };
    function array_Function() {
  // Array of image file names and labels
  const images = [
    { src: "images/Door1.png", label: "Room Door" },
    { src: "images/Door2.png", label: "Main Door" },
    { src: "images/Door3.png", label: "Front Door" },
    {src: "images/Coal1.png", label: "Coal Dump"},
	{src: "images/Coal2.png", label: "Coal Dump"},
	{src: "images/Coal3.png", label: "Coal Dump"},
	{src: "images/Forest1.png", label: "Tropical Forest"},
	{src: "images/Forest2.png", label: "Tropical Forest"},
	{src: "images/Forest3.png", label: "Tropical Forest"}
  ];

  // Build HTML string with images and captions
  let output = "";
  for (let i = 0; i < images.length; i++) {
    output += `
      <div class="image-item">
        <img src="${images[i].src}" alt="${images[i].label}">
        <div class="caption">${images[i].label}</div>
      </div>
    `;
  }

  // Display inside the <p> with id="Array"
  document.getElementById("Array").innerHTML = output;
};
function constant_function() {
  const musical_Instrument = {
    type: "Guitar",
    brand: "Fender",
    color: "Sunburst",
    year: 2020,
    age: function() {
      return new Date().getFullYear() - this.year;
    }
  };

  document.getElementById("Constant").innerHTML = "The instrument is a " + musical_Instrument.age() + " year old " + musical_Instrument.color + " " + musical_Instrument.brand + " " + musical_Instrument.type + ".";
};
// Create an object using const with properties and values
const laptop = {
  brand: "Dell",
  model: "XPS 15",
  year: 2023,
  color: "Silver"
};

// Function to display property values in the HTML element with id="Constant"
function constant_function() {
  const message = `My laptop is a ${laptop.color} ${laptop.brand} ${laptop.model} from ${laptop.year}.`;
  document.getElementById("Constant").innerHTML = message;
};


