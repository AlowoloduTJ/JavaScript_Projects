    function myDictionary() {
      var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
      };
      delete Animal.Sound;
      
      const result = document.getElementById("result");
      result.innerHTML = `
        <li><strong>Species:</strong> ${Animal.Species}</li>
        <li><strong>Color:</strong> ${Animal.Color}</li>
        <li><strong>Breed:</strong> ${Animal.Breed}</li>
        <li><strong>Age:</strong> ${Animal.Age}</li>
        <li><strong>Sound:</strong> ${Animal.Sound}</li>
      `;
    }
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
    