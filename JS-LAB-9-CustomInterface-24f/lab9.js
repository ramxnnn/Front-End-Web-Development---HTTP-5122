//LAB 9-DATA STORAGE: INDEX PAGE

// window.onload
window.onload = function () {
    // Check for stored values in localStorage
    var storedName = localStorage.getItem("userName");
    var storedColor = localStorage.getItem("userColor");

    // Retrieve stored values
    if (storedName && storedColor) {
        // Change welcome text to stored name
        document.getElementById("newMsgBox").textContent = "Welcome, " + storedName + "!";

        // Change BG colour to stored colour
        document.body.style.background = storedColor;
    }

    // #####============== DO THIS PART FIRST! ===============
    // Get the form and set submit listener
    var form = document.forms["infoForm"];
    form.onsubmit = function () {
        // Get values from form
        var userName = document.getElementById("inName").value;
        var userColor = document.getElementById("inColor").value;

        // Console log the form values
        console.log("Name: " + userName + ", Color: " + userColor);

        // Store values in localStorage
        localStorage.setItem("userName", userName);
        localStorage.setItem("userColor", userColor);
    }

 // Delete button functionality
 var deleteButton = document.getElementById("btnDel");
 deleteButton.onclick = function () {
     // Remove stored values from localStorage
     localStorage.removeItem("userName");
     localStorage.removeItem("userColor");

     // Reload the page to reflect the changes
     location.reload();
 };
};