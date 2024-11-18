window.onload = function () {
    // Get the form and the place where we will show the result after submission
    var formHandle = document.forms["ixdForm"];
    var resultSection = document.getElementById("result"); // Section that shows after submitting the form
    var resultFname = document.getElementById("result__Fname");
    var resultLname = document.getElementById("result__Lname");
    var resultId = document.getElementById("result__id");
    var resultProgram = document.getElementById("result__program");
    var resultProject = document.getElementById("result__project");
    var projectCaption = document.getElementById("caption_project");

    // This is the rule for checking the Humber ID (it must start with N or n, followed by 8 digits)
    var humberIdRegex = /^[Nn]\d{8}$/;

    // When the form is submitted
    formHandle.onsubmit = function () {
        // Grab the values from the form
        var firstName = formHandle.f__fName.value;
        var lastName = formHandle.f__lName.value;
        var studentId = formHandle.f__id.value;
        var selectedProgram = formHandle.f__program.value;
        var selectedProject = formHandle.f__project.value;

        // Check if the first name is empty
        if (firstName === "") {
            formHandle.f__fName.style.background = "red"; // If empty, highlight it in red
            formHandle.f__fName.focus(); // Focus on the field so the user can fix it
            return false;
        } else {
            formHandle.f__fName.style.background = ""; 
        }

        // Check if the last name is empty
        if (lastName === "") {
            formHandle.f__lName.style.background = "red"; // Highlight it in red if it's empty
            formHandle.f__lName.focus();
            return false;
        } else {
            formHandle.f__lName.style.background = "";
        }

        // Check if the Humber ID is valid (using the regular expression)
        if (!humberIdRegex.test(studentId)) {
            formHandle.f__id.style.background = "red"; // Highlight in red if the ID doesn't match the pattern
            alert("Please enter a valid Humber ID (e.g., N0000000)."); // Show an alert if it's wrong
            formHandle.f__id.focus();
            return false;
        } else {
            formHandle.f__id.style.background = ""; 
        }

        // Check if the program is selected
        if (selectedProgram === "X") {
            formHandle.f__program.style.background = "red"; // Highlight in red if not selected
            formHandle.f__program.focus();
            return false;
        } else {
            formHandle.f__program.style.background = "";
        }

        // Check if a project is selected
        if (!selectedProject) {
            // Highlight the project section in red if no project is selected
            projectCaption.style.background = "red";
            return false;
        }

        // Hide the form after everything is submitted
        formHandle.style.display = "none";

        // Show the thank-you message with the data from the form
        resultFname.innerText = firstName;
        resultLname.innerText = lastName;
        resultId.innerText = studentId;
        resultProgram.innerText = selectedProgram;
        resultProject.innerText = selectedProject;

        // Show the result section
        resultSection.style.display = "block";

        // Stop the page from refreshing (stay on the same page)
        return false;
    };
};
