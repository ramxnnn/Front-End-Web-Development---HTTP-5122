/* LAB 8-1 - FINAL COUNTDOWN!! */

//create page load listener
window.onload = function() {

    //create page load function

    //create variables for required HTML elements
    var todayData = document.getElementById("todayData");
    var finalData = document.getElementById("finalData");
    var dueData = document.getElementById("dueData");
	var countMsg = document.getElementById("countMsg");

    //create variables for now date and due date
    var today = new Date();
    var dueDate = new Date("December 13, 2024 18:00:00");
    //console.log(today);
    //console.log(dueDate);

    //OUTPUT NOW DATE & DUE DATE TO HTML PAGE
    todayData.innerHTML = today.toDateString();
    finalData.innerHTML = dueDate.toDateString();

    //CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
    var todayTime = today.getTime();
    var dueTime = dueDate.getTime();

    //CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
    var timeDifference = dueTime - todayTime;
    var daysRemaining = Math.floor(timeDifference / (1000 * 3600 * 24));

    //LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUTPUT APPROPRIATE MESSAGE TO HTML PAGE
    if (daysRemaining >= 0) {
        dueData.innerHTML = daysRemaining;
        countMsg.innerHTML = "The Pet Project is due in " + daysRemaining + " days.";
    } else {
        countMsg.innerHTML = "The Deadline for the Final Assignment has passed!";
    }

}
