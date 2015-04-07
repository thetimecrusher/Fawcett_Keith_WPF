/**
 * Created by keithfawcett on 4/6/15.
 */

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less then our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}