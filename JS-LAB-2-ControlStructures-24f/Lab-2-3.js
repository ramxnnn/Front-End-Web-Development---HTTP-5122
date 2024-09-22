// ######## LAB 2-3 EMAIL SIGNUP ########
// alert("hey 2.3"); // COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

// ==== VARIABLES =========
var defaultEmail = "me@example.com";

// ==== LOGIC =============

// if the user wants to join the mailing list then
var response = confirm("Would you like to join our mailing list? Type 'yes' to join or 'no' to decline.");

switch (response) {
    case 'yes':
        // If the user agrees, then ask for their email address
        var email = prompt("Please enter your email address:", defaultEmail);

        // Validate the email input if email is equal to null or email is equal to the defaultEmail
        if (email=== null || email === defaultEmail) {
            alert("Thank you, but your email was not valid.");
        } else {
            alert("Thank you, our next newsletter will be sent to " + email + ".");
        }
        break;

    case 'no':
        // If the user declines then
        alert("Thank you, we will not bother you again.");
        break;

    default:
        // If there are any other inputs if needed
        alert("Invalid response. Please type 'yes' or 'no'.");
        break;
}
