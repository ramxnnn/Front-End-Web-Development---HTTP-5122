/* LAB 7 - SHIPPING FORM */

window.onload = function () {
  // This will get the shipping form by its name
  var formHandle = document.forms["form_ship"];
  // This will get the thank you message area
  var thanksMsg = document.getElementById("thanks_msg");
  // This will get to the spots where we’ll show the user's name and postal code
  var thanksCustomer = document.getElementById("thanksCustomer");
  var thanksPC = document.getElementById("thanksPC");
  var thanksSpeed = document.getElementById("thanksSpeed");
  var thanksCost = document.getElementById("thanksCost");
  // When the form gets submitted, do this
  formHandle.onsubmit = function () {
    // This will get the user's name and postal code from the form
    var nameInput = formHandle.f_Name.value;
    var postalCodeInput = formHandle.f_pc.value;
    var selectedIndex = formHandle.f_speed.selectedIndex;
    var deliverySpeedInput = formHandle.f_speed.value;
    var deliveryCost = formHandle.f_speed.options[selectedIndex].value;

    // Part 2 right here
    // check if the name is empty
    if (deliverySpeedInput === "0") {
      formHandle.f_speed.style.background = "red";
      formHandle.f_speed.focus();
      return false;
    } else {
      formHandle.f_speed.style.background = "";
    }
    if (nameInput === "") {
      formHandle.f_Name.style.background = "red";
      formHandle.f_Name.focus(); // focus to set the cursor in the feild
      return false;
    } else {
      formHandle.f_Name.style.background = "";
    }
    // check if the postal code is empty
    if (postalCodeInput === "") {
      formHandle.f_pc.style.background = "red";
      formHandle.f_pc.focus(); // Focus to set the cursor on the feild
      return false;
    } else {
      formHandle.f_pc.style.background = "";
    }

    // This will hide the form as we're done with it.
    formHandle.style.display = "none";

    // Show a thank you message with the user's name and postal code
    thanksCustomer.innerText = nameInput;
    thanksPC.innerText = postalCodeInput;
    thanksSpeed.innerText = formHandle.f_speed.options[selectedIndex].text;
    thanksCost.innerText = deliveryCost;
    // Show the thank you message to the user
    thanksMsg.style.display = "block";

    // Return false to stop the form from refreshing the page
    return false;
  };
};

// Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
  cid: 0,
  name: "",
  pc: "",
  speed: "",
  cost: 0,
};
