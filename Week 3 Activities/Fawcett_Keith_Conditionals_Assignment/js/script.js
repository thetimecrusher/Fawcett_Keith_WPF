// Keith Fawcett 4/10/15 Conditionals Assignment

//user input variables
var holes = prompt("Are you going to do 9, or 18 holes?"); //user inputs number of holes they will play
if(holes === "9" || holes === "18") { //if the input was 9 or 18
}else{ //do nothing otherwise
    holes = prompt("Please choose either 9 or 18."); //ask the user to input 9 or 18 again
}
var cart = prompt("Would you like to rent a cart? \nYES or NO"); //user inputs if they want to rent a cart
if(cart.toUpperCase() === "YES" || cart.toUpperCase() === "NO" || cart.toUpperCase() === "Y" || cart.toUpperCase() ==="N") { //if the input was yes or no
}else{ //do nothing otherwise
    cart = prompt("Please answer YES or NO"); //ask the user to input yes or no again
}
var clubs = prompt("Would you like to rent clubs? \nYES or NO"); //user inputs if they want to rent clubs
if(clubs.toUpperCase() === "YES" || clubs.toUpperCase() === "NO" || clubs.toUpperCase() === "Y" || clubs.toUpperCase() === "N")  { //if the input was yes or no
}else{ //do nothing otherwise
    clubs = prompt("Please answer YES or NO"); //ask the user to input yes or no again
}
var month = prompt("What Month will you be playing?"); //user inputs the month they will be playing
if(month.toUpperCase() === "JANUARY" || month.toUpperCase() === "FEBRUARY" || month.toUpperCase() === "MARCH" || month.toUpperCase() === "APRIL" || month.toUpperCase() === "MAY" || month.toUpperCase() === "JUNE" || month.toUpperCase() === "JULY" || month.toUpperCase() === "AUGUST" || month.toUpperCase() === "SEPTEMBER" || month.toUpperCase() === "OCTOBER" || month.toUpperCase() === "NOVEMBER" || month.toUpperCase() === "DECEMBER") { // if the input was a valid month
}else{ //do nothing otherwise
    month = prompt("Please enter a valid Month."); //ask the user to input a valid month
}
var time = prompt("What Hour would you like to play?\nPlease enter using a 24 hour clock between 6 and 18."); //user inputs the time they will be playing
if(time >= 6 && time <= 18) { //if the time is between 6 and 18
}else{ //do nothing otherwise
    time = prompt("Please chose between 6 and 18."); //ask the user to input a number between 6 and 18 again
}


var totalCost = 0; //created the totalCost variable set to 0


//hole prices
if(holes ==="9"){ //if the user is playing 9 holes
    totalCost += 40; //add $40 to the totalCost
}
if(holes === "18"){ //if the user is playing 18 holes
    totalCost += 60; //add $60 to the totalCost
}

//time of year multiplier
if(month.toUpperCase() === "OCTOBER" || month.toUpperCase() === "NOVEMBER" || month.toUpperCase() === "DECEMBER" ||month.toUpperCase() === "JANUARY" || month.toUpperCase() === "FEBRUARY"){ //if the user is playing between october and february
    totalCost /= 2; //cut the totalCost in half
}else if(month.toUpperCase() === "MARCH" || month.toUpperCase() === "APRIL" || month.toUpperCase() === "MAY"){ //if the user is playing between march and may
    totalCost *= 1; //keep the totalCost the same
}else{ //otherwise if the user is playing between june and september
    totalCost *= 2; //double the totalCost
}

(cart.toUpperCase() === "YES" || "Y") ? cart = 15: cart = 0; //if the user is getting a cart make cart $15 otherwise make it 0

(clubs.toUpperCase() === "YES" || "Y") ? clubs = 15: clubs = 0; // if the user is renting clubs make the clubs $15 otherwise make it 0

if(time >= 6 && time < 15){ //if the user is playing between 6am and 3pm
    time = 15; //make time $15
}else{ //otherwise
    time = 0; //make time 0
}

totalCost = totalCost + cart + clubs + time; //totaling up all the items to the final totalCost

console.log("Your total cost for golfing will be $" + totalCost); //prints to the console the total cost

/*
Testing

Holes = 18, Cart = yes, clubs = yes, month = june, time = 9
total = $165 which is correct.

Holes = 9, Cart = no, clubs = yes, month = january, time = 17
total = $35 which is correct.

Holes = 18, Cart = no, clubs = no, month = april, time = 11
total = $75 which is correct.

Holes = 18, Cart = yes, clubs = no, month = september, time = 18
total = $135 which is correct.

Holes = 9, Cart = yes, clubs = yes, month = march, time = 6
total = $85 which is correct.

 */