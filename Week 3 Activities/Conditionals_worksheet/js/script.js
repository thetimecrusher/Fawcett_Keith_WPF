// Keith Fawcett 4/6/15 Conditionals Worksheet

/*

//Celsius to Fahrenheit Converter

//defines the user input variables
var degrees = prompt("What is the temperature?"); //lets the user input the temperature
var unit = prompt("degrees Celsius \"C\" or degrees Fahrenheit \"F\"?"); //lets the user choose celsius or fahrenheit

//if else statement
if (unit === "C"){ //If unit is C then do this
    var convert = degrees * 9/5 + 32; //changes celsius to fahrenheit
    console.log("The temperature is " + convert + " degrees Fahrenheit."); //prints to the console the converted temperature
}else{ //if units is not C then do this
    var convert = (degrees - 32) * 5/9; // converts fahrenheit to celsius
    console.log("The temperature is " + convert + " degrees Celsius."); //prints to the console the converted temperature
}

    */

/*

//Last Chance for Gas!

//defines the user input variables
var mpg = prompt("How many miles per gallon does your car get?"); //user inputs the number of miles per gallon their car gets
var percent = prompt("What percent of a full tank do you have left?"); //user inputs what percent of the tank they have left
var tank = prompt("How many gallons does your tank hold?"); //user inputs how many gallons their tank can hold

//calculations
var gallons = percent/100 * tank; //calculates how many gallons are left in the car
var milesLeftInTank = gallons * mpg; //calculates how far they can go with the amount of gas they have left

//if else statement
if(milesLeftInTank >= 200){ //if they can drive 200 miles or more with their current gas level
    console.log("Yes, you can make it without stopping for gas!") // prints to the console that they don't need gas
}else{ // if they cant go 200 miles with the gas they have left
    console.log("You only have " + gallons + " gallons of gas in your tank, better get gas now while you can!") //prints to the console that they should get gas now
}

    */

/*

//Grade Letter Calculator

//defines the user input variable
var grade = prompt("What was your final percent grade in your class?"); // user inputs their final percent grade for the class

//if else statement
if(grade >= 95){ //if the students gets 95% or more
    console.log("You have a "+ grade + "%, which means you have earned a A+ in the class!") //prints to the console they got a A+
}else if(grade < 95 && grade >= 90 ){ //if the student gets 90% or more but less then 95%
    console.log("You have a "+ grade + "%, which means you have earned a A in the class!")//prints to the console they got a A
}else if(grade < 90 && grade >= 85 ){//if the student gets 85% or more but less then 90%
    console.log("You have a "+ grade + "%, which means you have earned a B+ in the class!")//prints to the console they got a B+
}else if(grade < 85 && grade >= 80 ){//if the student gets 80% or more but less then 85%
    console.log("You have a "+ grade + "%, which means you have earned a B in the class!")//prints to the console they got a B
}else if(grade < 80 && grade >= 76 ){//if the student gets 76% or more but less then 80%
    console.log("You have a "+ grade + "%, which means you have earned a C+ in the class!")//prints to the console they got a C+
}else if(grade < 76&& grade >= 73 ){//if the student gets 73% or more but less then 76%
    console.log("You have a "+ grade + "%, which means you have earned a C in the class!")//prints to the console they got a C
}else if(grade < 73 && grade >= 70 ){//if the student gets 70% or more but less then 73%
    console.log("You have a "+ grade + "%, which means you have earned a D in the class!")//prints to the console they got a D
}else{//if the student gets anything else
    console.log("You have a "+ grade + "%, which means you have earned a F in the class!")//prints to the console they got a F
}

    */

//Check the Login

//defines the user input variables
var username = prompt("What is your username?"); //user inputs their username
var password = prompt("What is your password?"); //user inputs their password
var correctUsername = prompt("What is your correct username?"); //user inputs their correct username
var correctPassword = prompt("What is your correct password?"); //user inputs their correct password

//if else statement
if(username === correctUsername && password === correctPassword){ //if the user's username and correct username match and their password and the correct password match
    console.log("Welcome, " +username + "!"); //print to the console the welcome and the users name
}else if(username != correctUsername){ //if the username and the correct username do not match
    console.log("User not found. Try again."); //print to the console User not found. Try again
} else if(username === correctUsername && password != correctPassword){ //if the username and correct username match but the password and correct password do not match
    console.log("Password does not match our records."); //print to the console Password does not match our records
}