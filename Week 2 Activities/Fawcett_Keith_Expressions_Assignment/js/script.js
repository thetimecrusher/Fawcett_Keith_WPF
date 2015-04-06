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

var monthsToPay = (paymentYear - thisYear)*12 + paymentMonth - thisMonth; //calculates the number of months till it's payed off

var interestPerMonth = interest /100/12; //calculates what percent interest is owed per month

var  equation = Math.pow((1+ Number(interestPerMonth)),monthsToPay); //calculating part of the formula for the next line, Math.pow is used to calculate to the power of

var payment = price * interestPerMonth * equation / (equation -1); //calculates how much needs to be payed each month to get the loan payed off by the pay off date

alert("You have to pay $" + payment.toFixed(2) + " per month") //alert telling the user how much they have to pay per month

//prints the final message into the console
console.log("You have to pay $" + payment.toFixed(2) /*.toFixed(2) keeps the number to only 2 decimal places*/ + " per month for your $" + price + " " + item + " to be payed off by " + month[paymentMonth] + " of " + paymentYear + " if you have a loan at " + interest + "% interest rate.");

/*

Testing

Item = car, price = 30000, interest = 8, paymentYear = 2030, paymentMonth = 4
It equaled $286.70 which is correct.

Item = car, price = 15000, interest = 3, paymentYear = 2020, paymentMonth = 6
It equaled $261.47 which is correct.

Item = motorcycle, price = 4000, interest = 14, paymentYear = 2018, paymentMonth = 2
It equaled $143.20 which is correct.

Item = house, price = 250000, interest = 4, paymentYear = 2035, paymentMonth = 1
It equaled $1527.49 which is correct.

Item = house, price = 1500000, interest = 2, paymentYear = 2037, paymentMonth = 1
It equaled $7092.18 which is correct.
 */