// Keith Fawcett 4/6/15 Conditionals Worksheet

//Celsius to Fahrenheit Converter

//defines the variables
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