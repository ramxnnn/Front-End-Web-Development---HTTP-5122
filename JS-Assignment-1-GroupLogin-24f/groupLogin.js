// This asks the user for their team number i.e (1 to 6)
var teamNumber = window.prompt("Please enter your team number (1 to 6)");

// This code checks if the user pressed cancel or not
if (teamNumber === null) {
    window.alert("Access Denied! You canceled the prompt.");
} else {
    // This checks if the input is a number or not
    if (!isNaN(teamNumber)) {
        // This turn team number into a number
        teamNumber = Number(teamNumber);
        
        // Check if the number is between 1 and 6
        if (teamNumber >= 1 && teamNumber <= 6) {
            // This asks the user for their first name
            var firstName = window.prompt("Enter your first name: ");
            
            // Check if the user pressed cancel
            if (firstName === null) {
                window.alert("Access Denied! You canceled the prompt.");
            } else {
                // List of allowed names
                var validNames = ['Raman', 'RJ', 'Muskaan', 'Kumar'];
                var fullNames = ['Ramanpreet Pannu', 'Rohan Juneja', 'Muskaan Chhikara', 'Kumar Varma'];
                
                // Clean up the name input
                var trimmedFirstName = firstName.trim();
                
                // This finds out that if the name is in the list or not
                var index = validNames.findIndex(name => name.toLowerCase() === trimmedFirstName.toLowerCase());
                
                // This checks if the name is valid
                if (index !== -1) {
                    // Welcome the user with their full name
                    window.alert("Welcome, " + fullNames[index] + "!");
                } else {
                    // If the name is not valid, show this message
                    window.alert("Access Denied! Invalid name.");
                }
            }
        } else {
            // If the team number isn’t between 1 and 6, show this message
            window.alert("Access Denied! Wrong team number! Must be between 1 and 6.");
        }
    } else {
        // If the input isn’t a number, show this message
        window.alert("Access Denied! It must be a number!");
    }
}
