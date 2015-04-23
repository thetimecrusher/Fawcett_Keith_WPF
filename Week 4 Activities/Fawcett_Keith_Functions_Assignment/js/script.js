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