// Keith Fawcett 4/3/15 Expressions_Worksheet

/*

//Calculate age of a dog in dog years

var age = prompt("How old is sparky?"); //user inputs the dogs age
var dogAge = Number(age) * 7; //Multiplies the dogs age by 7 to get the age in dog years

//Prints to the console the age of the dog in human years and in dog years
console.log("Sparky is " + age  + " human years old which is " + dogAge + " in dog years.");

*/


/*

//Calculates how much pizza each person will get
var numPizza = prompt("How many pizzas were ordered?"); //user inputs the number of pizzas ordered
var slicesPerPizza = prompt("How many slices are the pizzas cut into?"); //user inputs the number of slices each pizza has
var people = prompt("How many people are at the party?") //user inputs the number of people at the party



var slicesPerPerson = numPizza * slicesPerPizza / people; // Calculates how many slices each person can have

//Prints to the console the number of slices that each person at the party had
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");





//calculates how many slices of pizza Sparky gets to eat
var sparkySlices = (numPizza * slicesPerPizza) % people; //calculates the remaining slices if every one has whole pieces

//Prints to the console how many slices of pizza sparky gets
console.log("Sparky gets " + sparkySlices + " slices of pizza");

*/


/*

//Calculate the average amount spent on groceries
var groceries = [130, 98, 103, 123, 114];  //Created my array of grocery prices in 5 weeks

var total = groceries[0] + groceries[1] + groceries[2] + groceries[3] +groceries[4]; // totaling all of the weeks
var average = total/5; // dividing the total by the number of weeks to get the average

//printing to the console the total amount spent and the average per week
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" +average+ " per week")

*/

//Calculate the discounted price of an object with and without tax
var originalPrice = prompt("What is the price of your item?"); //user inputs the price of their item
var disPercent = prompt("What percent discount does your item have?"); //user inputs the discount percentage of their item
var item = prompt("What is your item?"); //user inputs the name of the item
var tax = prompt("What percent sales tax does it have?"); //user inputs the sales tax percentage of their item

var withoutTax = originalPrice - (disPercent/100 * originalPrice); //calculates the price of the item before taxes
var withTax = withoutTax - (tax/100 * withoutTax); //calculates the price of the item after taxes

//prints to the console the name of the item, it's original price, the discount percentage, and the price of the item before and after taxes.
console.log("Your "+ item + " was originally $" + originalPrice + ", but after a " + disPercent + "% discount, it is now $" +withoutTax+ " without tax, and $" +withTax+ " with tax.")







