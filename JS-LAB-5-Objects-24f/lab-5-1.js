//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

// 1. Create object called meObject

var meObject = {
    name: "Raman",
    age: 25,
    occupation: "Student",
    city: "Toronto",

    about: function () {
        alert("My name is " + meObject.name + " and i am a " + meObject.occupation);
    }
};

// Console log for one of the properties above
console.log(meObject.age);

// Popup for two concatinated properties

// alert("My name is " + meObject.name + " and i am " + meObject.occupation + ".");

// call the function

meObject.about();




