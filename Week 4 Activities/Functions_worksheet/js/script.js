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
    var circumference = 2 * 3.14159265358978 * r //makes the calculations and puts it into the variable circumference
}