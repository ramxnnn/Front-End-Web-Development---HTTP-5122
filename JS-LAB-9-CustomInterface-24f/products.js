//LAB 9-DATA STORAGE: PRODUCTS PAGE

// LAB 9-DATA STORAGE: PRODUCTS PAGE

window.onload = function () {
    // Check for stored values in localStorage
    var storedName = localStorage.getItem("userName");
    var storedColor = localStorage.getItem("userColor");

    // Retrieve stored values and apply them
    if (storedName && storedColor) {
        // Change welcome text to stored name
        document.getElementById("newMsgBox").textContent = "Welcome, " + storedName + "!";

        // Change BG colour to stored colour
        document.body.style.background = storedColor;
    }
};
