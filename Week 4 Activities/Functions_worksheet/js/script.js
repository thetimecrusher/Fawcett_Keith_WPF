/**
  Keith Fawcett
   4/18/15
   Function Worksheet
 */

//Calculate the Area of a Rectangle

var width = prompt("What is the width of your Rectangle?"); //user inputs the width of their rectangle
var height = prompt("What is the height of your Rectangle?"); //user inputs the height of their rectangle

function calculateArea(w, h){ //makes the functions calculateArea

    return w * h; //returns the calculation for the area
}
var area = calculateArea(width, height); //runs the function calculateArea and puts the output into the variable area
console.log("The area of the Rectangle is " + area); //prints to the console the area of the rectangle



//Calculate the Circumference of a Circle

var radius = prompt("What is the radius of your circle?"); //user inputs the radius of their circle

function calculateCircumference(r) { //makes the function calculateCircumference
     return 2 * 3.14159265358978 * r; //makes the calculations and puts it into the variable circumference and sends out the circumference number out of the function
}

var answer = calculateCircumference(radius); // runs the function calculateCircumference and puts the output into the variable answer

console.log("The circumference of the circle is " + answer); //prints to the console the circumference of the circle



//Calculates the number of stings it takes to kill an animal

var weight = prompt("What is the victim's weight in pounds?"); //user inputs the victim's weight

function numberOfStings(w) { //makes the functions numberOfStings
    return w * 8.666666667; //makes the calculation and puts it into the variable stings and sends the stings number out of the function
}

var total = numberOfStings(weight); //runs the function numberOfStings and puts the output into the variable total

console.log("It takes " + total + " bee stings to kill this animal."); //prints to the console the number of stings it will take to kill the animal