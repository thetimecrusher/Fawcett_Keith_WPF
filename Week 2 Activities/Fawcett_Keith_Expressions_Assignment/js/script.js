// Keith Fawcett 4/6/15 Expressions_Assignment

//Calculates the monthly payment needed for a loan to be payed off by the users desired date

var item = prompt("What did you buy?"); //user inputs the item that they bought
var price = prompt("What did it cost?"); //user inputs how much their item costs
var interest = prompt("What percent interest is your loan?"); //user inputs the percent that their loan is
var paymentYear = prompt("What year do you want your " + item + " payed off by?"); //user inputs what year they want their item payed off
var paymentMonth = prompt("What month?\nEnter 1-12"); //user inputs what month they want their item pay off

paymentMonth --; // changes the input from starting at 1 to starting at 0 like arrays use

//logs the months in an array
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Found this out online at http://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
var currentTime = new Date(); // creates Date object
var thisYear = currentTime.getFullYear(); //gets the current year
var thisMonth = currentTime.getMonth(); //gets the current month