//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION
function calAverage(num1, num2, num3, num4, num5) {
    var total = num1 + num2 + num3 + num4 + num5;
    var average = total / 5;
    return average;
}

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
console.log(calAverage(5, 10, 15, 20, 25)); //console output with the result 15

// Creating five variables (one for each course in this semester)
// Variables for Sucess
// var IXD5106 = 78; 
// var HTTP5121 = 82; 
// var HTTP5126 = 91; 
// var HTTP5125 = 67; 
// var HTTP5122 = 85; 

// Variables for review required

var IXD5106 = 50; 
var HTTP5121 = 50; 
var HTTP5126 = 50; 
var HTTP5125 = 50; 
var HTTP5122 = 50; 


// Using my custom function to create a logic that will send the success popup if my functions returns an overall average of 70 or more.

var overallAverage = calAverage(IXD5106, HTTP5121, HTTP5126, HTTP5125, HTTP5122);

// if logic for this

if (overallAverage >= 70) {
    alert("Success! Your average is " + overallAverage);
} else {
    alert("Review required. Your average is " + overallAverage);
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
