// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoMass);

    if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelStatus === "Empty" || cargoStatus === "Empty") {
        alert("All fields must be completed.");
        return;
    }

    if (pilotStatus === "Is a Number" || copilotStatus === "Is a Number") {
        alert("Please only use letters in name fields.");
        return;
    }

    if (fuelStatus === "Not a Number" || cargoStatus === "Not a Number") {
        alert("Please only use numbers in value fields.");
        return;
    }

    let fuelLevelNum = Number(fuelLevel);
    let cargoMassNum = Number(cargoMass);

    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready`;

    let readyForLaunch = true;
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");
    let fuelStatusElement = document.getElementById("fuelStatus");
    let cargoStatusElement = document.getElementById("cargoStatus");

    if (fuelLevelNum < 10000) {
        fuelStatusElement.innerHTML = "Fuel level too low for launch";
        readyForLaunch = false;
    } else {
        fuelStatusElement.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoMassNum > 10000) {
        cargoStatusElement.innerHTML = "Cargo mass too high for launch";
        readyForLaunch = false;
    } else {
        cargoStatusElement.innerHTML = "Cargo mass low enough for launch";
    }

    if (readyForLaunch) {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
        faultyItems.style.visibility = "visible";
    } else {
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";
    }
}

 
function myFetch() {
    return fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(response => response.json());
}
 
 function pickPlanet(planets) {
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
 }
 
//enabled actions

 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;