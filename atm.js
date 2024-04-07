#! /usr/bin/env node
import inquirer from "inquirer";
let myCurrentBalance = 50000;
let myPinCode = 5050;
console.log("Welcome To CLI ATM");
let languageAns = await inquirer.prompt([
    {
        name: "option",
        type: "list",
        message: "Please Select Language",
        choices: ["English", "Urdu"]
    }
]);
let pinAnswer = await inquirer.prompt([
    {
        name: "pinCode",
        type: "number",
        message: "Enter 4 digit Pin Code 5050 :"
    }
]);
if (pinAnswer.pinCode === myPinCode) {
    console.log("Pin Code is Correct !!!");
    console.log("Please Wait While Your Transaction is Processing");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please Select Option",
            choices: ["Balance Inquiry", "Cash Withdraw", "Fast Cash", "Payments"]
        }
    ]);
    if (operationAns.operation === "Balance Inquiry") {
        console.log("Your Account Balance is: " + myCurrentBalance);
        console.log("Your Transaction has Completed");
        console.log("Thank You For Choosing HBL.");
    }
    else if (operationAns.operation === "Cash Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Your Amount to Withdraw: "
            }
        ]);
        if (amountAns.amount > myCurrentBalance) {
            console.log("Sorry, You Have Insuficient Balance.");
            console.log("Thank You For Choosing HBL.");
        }
        else {
            myCurrentBalance -= amountAns.amount;
            console.log("Your Transaction has Completed");
            console.log("Your Remaining Account Balance is: " + myCurrentBalance);
            console.log("Thank You For Choosing HBL.");
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Please Select Amount",
                choices: ["10000", "20000", "30000", "40000", "50000"]
            }
        ]);
        myCurrentBalance -= fast.fastCash;
        console.log("Your Transaction has Completed");
        console.log("Your Remaining Account Balance is: " + myCurrentBalance);
        console.log("Thank You For Choosing HBL.");
    }
    else if (operationAns.operation === "Payments") {
        let paymentsAns = await inquirer.prompt([
            {
                name: "payments",
                type: "list",
                message: "Please Select Option",
                choices: ["K.E Bill Payments", "SUI Gas Bill Payments", "Mobile Balance"]
            }
        ]);
        if (paymentsAns.payments === "Payments") {
            console.log("Your Transaction has Completed");
            console.log("Thank You For Choosing HBL.");
        }
    }
}
else {
    console.log("Incorrect Pic Code, Try Again!");
    console.log("Thank You For Choosing HBL.");
}
