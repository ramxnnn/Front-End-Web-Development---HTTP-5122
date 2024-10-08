//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var bankCustomer = {
    lastName: "Pannu",
    branchNumber: 123,
    accountBalance: 500.25,
    interestRate: 1.03, //for 3%
    multipleAccounts: true, // Stretch goal

    makeDeposit: function (amount) {
        this.accountBalance += amount;
        return "Thank you, your current balance is now $" + this.accountBalance;
    },

    makeWithdrawal: function (amount) {
        this.accountBalance -= amount;
        return "Thank you, your current balance is now $" + this.accountBalance;
    },

    // Stretch goal for Add Interest Method
    addInterest: function () {
        if (this.multipleAccounts) {
            this.accountBalance *= (this.interestRate + 0.005); // Temporary increase the interest rate if the value is true
        } else {
            this.accountBalance *= this.interestRate; // Else Use normal interest rate 
        }
        return "Thank you, your current balance is now $ " + this.accountBalance.toFixed(2);
        // this.accountBalance *= this.interestRate;
        // return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
    }
};

// Output the starting balance to the console

console.log("Starting balance: $" + bankCustomer.accountBalance);

// Deposit 200$

console.log(bankCustomer.makeDeposit(200));

// Output new balance to the console

console.log("New balance after making the deposit is $ " + bankCustomer.accountBalance);

// Withdraw 75$

console.log(bankCustomer.makeWithdrawal(75));

// Output the new balance to console

console.log("New balance after making the withdrawl is $ " + bankCustomer.accountBalance);

// Stretch Goal to call the addInterest function
console.log(bankCustomer.addInterest());