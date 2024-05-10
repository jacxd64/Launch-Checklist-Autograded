// Write your JavaScript code here!

window.addEventListener("load", function() {

    myFetch().then(function(listedPlanets) {
        const planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });

    //let form = document.querySelector("form");
    let submitButton = document.getElementById("formSubmit");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        let faultyItems = document.getElementById("faultyItems");

        formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
    });
});
