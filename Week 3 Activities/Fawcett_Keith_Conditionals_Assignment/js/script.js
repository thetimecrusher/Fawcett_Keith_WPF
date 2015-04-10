// Keith Fawcett 4/10/15 Conditionals Assignment

//user input variables
var holes = prompt("Are you going to do 9, or 18 holes?"); //user inputs number of holes they will play
if(holes === "9" || holes === "18") { //if the input was 9 or 18
}else{ //do nothing otherwise
    holes = prompt("Please choose either 9 or 18."); //ask the user to input 9 or 18 again
}
var cart = prompt("Would you like to rent a cart? \nYES or NO"); //user inputs if they want to rent a cart
if(cart.toUpperCase() === "YES" || cart.toUpperCase() === "NO") { //if the input was yes or no
}else{ //do nothing otherwise
    cart = prompt("Please answer YES or NO"); //ask the user to input yes or no again
}
var clubs = prompt("Would you like to rent clubs? \nYES or NO"); //user inputs if they want to rent clubs
if(clubs.toUpperCase() === "YES" || clubs.toUpperCase() === "NO") { //if the input was yes or no
}else{ //do nothing otherwise
    clubs = prompt("Please answer YES or NO"); //ask the user to input yes or no again
}
var month = prompt("What month will you be playing?"); //user inputs the month they will be playing
if(month.toUpperCase() === "JANUARY" || month.toUpperCase() === "FEBRUARY" || month.toUpperCase() === "MARCH" || month.toUpperCase() === "APRIL" || month.toUpperCase() === "MAY" || month.toUpperCase() === "JUNE" || month.toUpperCase() === "JULY" || month.toUpperCase() === "AUGUST" || month.toUpperCase() === "SEPTEMBER" || month.toUpperCase() === "OCTOBER" || month.toUpperCase() === "NOVEMBER" || month.toUpperCase() === "DECEMBER") { // if the input was a valid month
}else{ //do nothing otherwise
    month = prompt("Please enter a valid month."); //ask the user to input a valid month
}
var time = prompt("What hour would you like to play?\nPlease enter in military time between 6 and 18."); //user inputs the time they will be playing
if(time > "6" || time < "18") { //if the time is between 6 and 18
}else{ //do nothing otherwise
    time = prompt("Please chose a military hour between 6 and 18.") //ask the user to input a number between 6 and 18 again
}

