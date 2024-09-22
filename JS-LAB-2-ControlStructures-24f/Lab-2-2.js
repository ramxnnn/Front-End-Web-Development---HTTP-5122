//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
var correctUsername = "dart";	// Correct user name
var correctPassword = "vader";	// Correct password
var userNameInput = correctUsername;	// user name input
var passwordInput = correctPassword;	// password input

//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
userNameInput = prompt("Please enter your username!!");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE

console.log(" The provided username is " + userNameInput);

//5. CREATE POPUP BOX FOR PASSWORD

passwordInput = prompt("Please enter your password!!");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE

console.log(" The provided password is " + passwordInput);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD

if (userNameInput === correctUsername && passwordInput === correctPassword) {
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
	alert(" Welcome back " + userNameInput);
	console.log("Login Successful")

} else {
//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
	alert("Invalid username/password")
	console.log("Login Failed");
}