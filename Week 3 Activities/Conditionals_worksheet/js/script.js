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