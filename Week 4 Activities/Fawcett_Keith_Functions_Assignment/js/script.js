/**
 * Keith Fawcett
 * 4/23/15
 * Functions_Assignment
 */

//created the variable coc or circle of confusion
var coc;

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