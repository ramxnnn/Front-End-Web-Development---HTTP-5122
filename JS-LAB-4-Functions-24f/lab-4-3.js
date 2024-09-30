//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG


//################## CREATE YOUR checkTemp FUNCTION
// This function will check if the temperature is safe for walking a dog.
// It expects to receive one parameter: currentTemp (a number representing the temperature).
// It will return true if the temperature is safe (between -10 and 30 degrees), and false if it is too hot or too cold.

// Creating a function for checking the temprature for too cold or too hot 

function checkTemp(currentTemp) {
    if (currentTemp > 30 || currentTemp < -10) {
        return false; // Too hot or too cold
    } else {
        return true; // Safe to walk
    }
}

// Creating a variable for the user and passing it to the parameter for checking the function.

var currentTemperature = prompt("What is the current temperature?"); // To Ask for current temperature as the input

if (checkTemp(currentTemperature) === false) {
    alert("Yikes! This is no weather for dog walking!"); // This is the Message for too hot or too cold to walk the dog
} else {
    alert("You’re good, have a nice walk!"); // Message for safe temperature
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
