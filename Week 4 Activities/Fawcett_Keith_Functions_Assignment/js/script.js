/**
 * Keith Fawcett
 * 4/23/15
 * Functions_Assignment
 */

//created the variable coc or circle of confusion
var coc;

//created the variable totalDof stands for total depth of field
var totalDof;

//creates variable sensor and asks the user if their camera has a full frame or crop sensor
var sensor = prompt("Does your camera have a full frame or a crop sensor?").toLowerCase().trim();

//makes sure the user inputs a usable name like crop or full frame
while(sensor !== "crop" && sensor !== "crop sensor" && sensor !== "cropsensor" && sensor !== "c" && sensor !== "full frame" && sensor !== "full" && sensor !== "fullframe" && sensor !== "full frame sensor" && sensor !== "fullframe sensor" && sensor !== "full framesensor" && sensor !== "fullframesensor" && sensor !== "f"){

    //if the users input is not usable it asks for a different input
    sensor = prompt("That is not a valid answer\nDoes your camera have a full frame or a crop sensor?").toLowerCase().trim();
}

//if the user inputs that their camera has a crop sensor
if(sensor === "crop" || sensor === "crop sensor" || sensor === "cropsensor" || sensor === "c"){

    // then ask the user to input what brand of camera they have
    var cropFactor = prompt("What brand is your camera?").toLowerCase().trim();

    //makes sure the user inputs a usable name like canon or nikon
    while (cropFactor != "canon" && cropFactor != "nikon" && cropFactor != "sigma" && cropFactor != "pentax" && cropFactor != "sony"){

        //if the users input is not usable it asks for a different input
        cropFactor = prompt("I'm sorry we do not have that brand\nPlease answer either Canon, Nikon, Pentax, Sigma, or Sony").toLowerCase().trim();
    }
    //if the user inputs canon
    if (cropFactor === "canon") {
        //then it makes the coc equal 0.018
        coc = 0.018;
        //if the user inputs sigma
    } else if (cropFactor === "sigma") {
        //then it makes the coc equal 0.017
        coc = 0.017;
        //if the user inputs nikon, pentax or sony
    } else if (cropFactor === "nikon" || cropFactor === "pentax" || cropFactor === "sony") {
        //then it makes the coc equal 0.019
        coc = 0.019;
    }
//if the user inputs that their camera is a full frame camera
}else if(sensor === "full frame" || sensor === "full" || sensor === "fullframe" || sensor === "full frame sensor" || sensor === "fullframe sensor" || sensor === "full framesensor" || sensor === "fullframesensor"|| sensor === "f"){

    //then it makes the coc equal 0.029
    coc = 0.029
}

//creates the variable aperture and asks the user to input what aperture they are using
var aperture = prompt("What is your aperture? (between 1 and 32)");
//checks to make sure the input is a number between 1 and 32
while (isNaN(aperture) === true || aperture > 32 || aperture < 1) {
    //if the input is not a number between 1 and 32 the question is asked again
    aperture = prompt("I am sorry that is not a known aperture\nWhat is your aperture? (between 1 and 32)");
}

//creates the variable focalLength and asks the user to input what the focal Length they are using
var focalLength = prompt("What is your Focal Length? (mm)");
//checks to make sure the input is a number greater then zero
while (isNaN(focalLength) === true || focalLength <= 0){
    //if the input is not a number greater then zero the question is asked again
    focalLength = prompt("I'm sorry that is not a proper answer\nWhat is your Focal Length? (mm)");
}

//creates the variable distanceInMM and asks the uer to input how far away their subject is (in feet)
var distance = prompt("How far away is your subject? (Feet)");
//checks to make sure the input is a number greater then zero
while (isNaN(distance) === true || distance <= 0){
    //if the input is not a number greater then zero the question is asked again
    distance = prompt("I'm sorry that is not a number\nHow far away is your subject? (Feet)");
}

//created variable distanceInMM and changes the users input from feet into millimeters
var distanceInMM = distance * 304.8;

//creates a function called hyperFocal with three parameters
function hyperFocal(f, a, c) {
    //returns the hyperFocal calculation back to the function
    return (f * f) / (a * c);
}

//creates a anonymous function called nearPoint with three parameters
var nearPoint = function(h, d, f) {
    //returns the nearPoint calculation to the second decimal place back to the function
    return (((h * d) / (h + (d - f))) * 0.0032808).toFixed(2);
};

//creates a anonymous function called farPoint with three parameters
var farPoint = function(h, d, f){
    //returns the farPoint calculation to the second decimal place back to the function
    return (((h * d) / (h - (d - f)))*0.0032808).toFixed(2);
};

//creates a variable finalHyperFocal and runs the hyperFocal function with the arguments of focalLength, aperture and coc
var finalHyperFocal = hyperFocal(focalLength, aperture, coc);

//creates a variable finalNearPoint and runs the nearPoint function with the arguments of finalHyperFocal, distanceInMM and focalLength
var finalNearPoint = nearPoint(finalHyperFocal, distanceInMM, focalLength);

//creates a variable finalFarPoint and runs the farPoint function with the arguments of finalHyperFocal, distanceInMM and focalLength
var finalFarPoint = farPoint(finalHyperFocal, distanceInMM, focalLength);

//if the finalFarPoint is a negative number
if(finalFarPoint <= 0){
    //make finalFarPoint equal infinity
    finalFarPoint = "infinity"
}
//if the finalFarPoint is equal to infinity
if(finalFarPoint === "infinity"){
    //make totalDof equal infinity
    totalDof = "infinity";

    //otherwise
}else{
    //make totalDof equal the finalFarPoint minus the finalNearPoint to the second decimal point
    totalDof = (finalFarPoint - finalNearPoint).toFixed(2);
}

//prints the the console where their Hyper focal point is in feet
console.log("Your Hyper Focal point is " + (finalHyperFocal*0.0032808).toFixed(2) + " ft");

//prints the the console where their near point is in feet
console.log("Your Near Point is " + finalNearPoint + " ft");

//prints the the console where their far point is in feet
console.log("Your Far Point is " + finalFarPoint + " ft");

//prints the the console what their total depth of field is in feet
console.log("Your Total Depth of Field is " + totalDof + " ft");

/*
 Tests

I input full frame, aperture of 1, Focal Length of 50, and a distance of 40 feet.
The output was
 Your Hyper Focal point is 282.83 ft
 Your Near Point is 35.06 ft
 Your Far Point is 46.56 ft
 Your Total Depth of Field is 11.50 ft
That is all correct


 I input F, aperture of 32, Focal Length of 200, and a distance of 60 feet.
 The output was
 Your Hyper Focal point is 141.41 ft
 Your Near Point is 42.26 ft
 Your Far Point is 103.38 ft
 Your Total Depth of Field is 61.12 ft
 That is all correct


 I input crop, canon, aperture of 1, Focal Length of 35, and a distance of 30 feet.
 The output was
 Your Hyper Focal point is 223.28 ft
 Your Near Point is 36.46 ft
 Your Far Point is 34.64 ft
 Your Total Depth of Field is 8.18 ft
 That is all correct


 I input crop sensor, NiKOn, aperture of 3.5, Focal Length of 85, and a distance of 15 feet.
 The output was
 Your Hyper Focal point is 356.45 ft
 Your Near Point is 14.40 ft
 Your Far Point is 15.65 ft
 Your Total Depth of Field is 1.25 ft
 That is all correct


 I input full, aperture of 22, Focal Length of 24, and a distance of 100 feet.
 The output was
 Your Hyper Focal point is 2.96 ft
 Your Near Point is 2.88 ft
 Your Far Point is infinity ft
 Your Total Depth of Field is infinity ft
 That is all correct

 */