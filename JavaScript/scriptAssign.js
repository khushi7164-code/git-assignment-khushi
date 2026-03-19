// ****Smart Discount Calculator

function calculateDiscount(name, age, purchaseAmount) {
    let discount = 0;

    
    if (age < 18) {
        discount += 10;
    } else if (age >= 60) {
        discount += 20;
    }

    if (purchaseAmount > 5000) {
        discount += 5;
    }

    const discountAmount = (purchaseAmount * discount) / 100;
    const finalAmount = purchaseAmount - discountAmount;

    console.log(`Hi ${name}! You received a total discount of ${discount}%. Final amount: ₹${finalAmount}`);

    return finalAmount;
}


calculateDiscount("Suresh", 65, 6000);
calculateDiscount("Raj", 15, 3000);
calculateDiscount("Priya", 45, 6500);


//****  Login Validation System

const validUsername = "admin";
const validPassword = "password123";

function validateLogin(inputUsername, inputPassword) {
    const usernameMatch = inputUsername === validUsername;
    const passwordMatch = inputPassword === validPassword;

    if (usernameMatch && passwordMatch) {
        console.log("Login successful!");
    } else if (!usernameMatch && !passwordMatch) {
        console.log("Both incorrect");
    } else if (!usernameMatch) {
        console.log("Incorrect username");
    } else {
        console.log("Incorrect password");
    }
}

validateLogin("admin", "password123");
validateLogin("admin", "wrong");
validateLogin("wrong", "password123");
validateLogin("wrong", "wrong");


//****  Number Analyzer Tool

function analyzeNumber(num) {
    let sign;
    let parity;

    if (num > 0) {
        sign = "positive";
    } else if (num < 0) {
        sign = "negative";
    } else {
        sign = "zero";
    }

    if (num % 2 === 0) {
        parity = "even";
    } else {
        parity = "odd";
    }

    console.log(`The number ${num} is ${sign} and ${parity}.`);
}

analyzeNumber(-4);
analyzeNumber(7);
analyzeNumber(0);
analyzeNumber(12);







//****  Shopping Eligibility Checker

function checkDeliveryEligibility(isMember, cartValue) {
    const eligibleForFreeDelivery = (isMember && cartValue > 1000) || cartValue > 2000;
    
    if (eligibleForFreeDelivery) {

        console.log("You are eligible for free delivery!");
    } else {
        console.log("You are not eligible for free delivery.");
    }
}

checkDeliveryEligibility(true, 1500);
checkDeliveryEligibility(false, 2500);
checkDeliveryEligibility(true, 800);
checkDeliveryEligibility(false, 1500);



//****  Grade Evaluation System

function evaluateGrade(marks) {
    if (marks < 0 || marks > 100) {
        console.log("Invalid marks entered.");
    } else if (marks >= 90) {
        console.log("Your grade is A.");
    } else if (marks >= 75) {
        console.log("Your grade is B.");
    } else if (marks >= 50) {
        console.log("Your grade is C.");
    } else {
        console.log("Your grade is Fail.");
    }
}

evaluateGrade(95);
evaluateGrade(82);
evaluateGrade(65);
evaluateGrade(45);
evaluateGrade(105);
evaluateGrade(-5);