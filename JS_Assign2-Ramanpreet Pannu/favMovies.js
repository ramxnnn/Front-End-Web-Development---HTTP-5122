// Declaring Variables for all 7 movies.
var movie1 = "The Matrix";
var movie2 = "The Godfather";
var movie3 = "Inception";
var movie4 = "Interstellar";
var movie5 = "The Dark Knight";
var movie6 = "The Lord of the Rings";
var movie7 = "Titanic";

// Array to hold all the top 7 movies

var moviesArray = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// Promt user for top 7 movies

var userFav = prompt(
  "Which top 7 movie would you like? Pick a number from: 1-7"
);

// Validate the user input
userInput = parseInt(userFav);

// if statement for validation as if a user inputs any value other than less than 1 or more than 7 it will provide the error message

if (userInput >= 1 && userInput <= 7) {
  alert(
    "Number " + userInput + " on the list is " + moviesArray[userInput - 1]
  );
} else {
  alert("Please enter a number between 1 and 7!");
}

// Output the message to the console with a for loop that lists all of the movies with their number.

for (var i = 0; i < moviesArray.length; i++) {
  console.log("Movie " + (i + 1) + ": " + moviesArray[i]);
}

// Stretch Goal is commented below this loop can be added before the if statement above to re-ask the user if they didn't input valid data.

/* 
we can setup a boolean value to check if the input is valid or not
example-

var isValid = false;

while (isValid === false) {
    var userFav = prompt("Which top 7 movie would you like? Pick a number from: 1-7");
  userInput = parseInt(userFav);
    if (userInput >= 1 && userInput <= 7) {
        alert("Number " + userInput + " on the list is " + moviesArray[userInput - 1]);
      } else {
        alert("Please enter a number between 1 and 7!");
      }
}

(I'm not really sure if i'm correct or not)
*/
