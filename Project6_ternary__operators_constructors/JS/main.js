function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
};
function checkVotingAge() {
      const age = Number(document.getElementById("age").value);

      // Ternary operator: condition ? valueIfTrue : valueIfFalse
      const message = (age >= 18)
        ? "You can vote!"
        : "You are not old enough to vote";

      document.getElementById("result").textContent = message;
    };
function Vehince(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehince("Dodge", "Viper", 2020, "Red");
var Emily = new Vehince("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehince("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
};
// Constructor function for a Person object
    function Person(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    function myFunction() {
      // Create a new Person object using the 'new' keyword
      const person1 = new Person("John", "Doe", 30);

      // Display the details in the paragraph
      document.getElementById("New_and_This").textContent =
        `Name: ${person1.firstName} ${person1.lastName}, Age: ${person1.age}`;
    };
    // 2️⃣ Object constructor function
    function Person(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    // Create a new Person object
    const person1 = new Person("John", "Doe", 30);

    document.getElementById("personOutput").textContent =
      `Person: ${person1.firstName} ${person1.lastName}, Age: ${person1.age}`;
  ;
  function outerFunction() {
      // Outer function variable
      const greeting = "Hello";

      // Inner function defined inside outer function
      function innerFunction(name) {
        return `${greeting}, ${name}! Welcome.`;
      }

      // Call the inner function from the outer
      const message = innerFunction("Taiwo");

      // Display the result in the browser
      document.getElementById("output").textContent = message;
    }