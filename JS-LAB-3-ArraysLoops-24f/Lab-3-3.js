//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var shoppingCart = [];
var total = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (total < 35) {
	//GET ITEM COST FROM USER
	var price = prompt("Enter the Dollar Value of the Item.")
	
	//CONVERT USER INPUT TO A NUMBER
	price = parseInt(price);

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	
	total += price;
	//PUSH ITEM COST TO CART ARRAY
	shoppingCart.push(price);
};


//SEND POPUP MESSAGE TO USER
//alert("Your shipping for this order will be free!");

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + shoppingCart.join(" | "));

// Stretch Goal
alert("Your shipping for this order will be free! Total Value of the purchased would be: $" + total);

