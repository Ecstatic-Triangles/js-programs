var people = parseInt(prompt("How many people do you have?"));
var pizza = parseInt(prompt("How many pizzas do you have?"));
var slicesPerPizza = parseInt(prompt("How many slices are in a pizza?"));

var totalSlices = pizza * slicesPerPizza;
var slicesPerPerson = Math.floor(totalSlices / people);
var leftovers = totalSlices % people;

alert("You have " + people + " people and " + pizza + " pizza(s)\n" +
      "Each person gets " + slicesPerPerson + " slice(s)\n" +
       "There are " + leftovers + " slices leftover.");
