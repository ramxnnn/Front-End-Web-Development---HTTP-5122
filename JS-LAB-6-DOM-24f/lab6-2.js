//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady() {

	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");

	//====CREATE THE FUNCTIONS WE'LL NEED====

	//FUNCTION TO ASK USER
	function askUser() {
		var userResponse = confirm("Do you want to see something?");
		if (userResponse) {
			// If the user clicks OK, hide the Mystery Box and show the Button Box
			mysteryBox.style.display = "none";
			buttonBox.style.display = "block";
		}
	}

	//FUNCTION TO CHANGE buttonBox
	function surpriseBox() {
		// Change the Button Box properties on click
		buttonBox.style.width = "600px";
		buttonBox.style.backgroundColor = "orange";
		buttonBox.querySelector("h2").innerText = "SURPRISE!!"; // Change text to "SURPRISE!!"
	}

	//SETUP LISTENERS
	mysteryBox.onmouseover = askUser;   // Call askUser on hover
	buttonBox.onclick = surpriseBox;    // Call surpriseBox on click

}//END onload FUNCTION
