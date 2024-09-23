//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY

var ourTeam = ["Raman", "Bob", "Joanna", "Eve", "Adam"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);

//REMOVE LAST MEMBER
ourTeam.pop();

// OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);

//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift("Sean");

// OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);

//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort();

// OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have " + ourTeam.length + " people in our group.");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for (var i = 0; i < ourTeam.length; i++) {
    console.log(ourTeam[i] + " is #" + (i + 1) + ".");
}
