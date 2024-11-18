/* LAB 8.2 - STOP TIME */

//create page load listener
window.onload = function () {

    //create page load function

    //create variables for required HTML elements
    var hoursOut = document.getElementById("hoursOut");
    var minsOut = document.getElementById("minsOut");
    var secsOut = document.getElementById("secsOut");
    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");

    //create time variable so all functions have access to it
    var time;

    //CREATE FUNCTION THAT DISPLAYS THE TIME
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Stretch Goal function for the two digit time.
        function formatTime(input) {
            if (input < 10) {
                return "0" + input.toString();  // This Adds a zero if the input is less than 10
            } else {
                return input.toString();  // This Returns the input as a string if it's already two digits
            }
        }

        // Hours, minutes, and seconds using the Function
        hours - formatTime(hours);
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);

        hoursOut.textContent = hours;
        minsOut.textContent = ":" + minutes;
        secsOut.textContent = ":" + seconds;
    }

    //CREATE FUNCTION TO START THE CLOCK.
    function startClock() {
        displayTime();
        time = setInterval(displayTime, 1000);
    }

    //CREATE FUNCTION TO STOP THE CLOCK
    function stopClock() {
        clearInterval(time);
    }

    // SET EVENT LISTENERS
    btnStart.addEventListener("click", startClock);
    btnStop.addEventListener("click", stopClock);
};
