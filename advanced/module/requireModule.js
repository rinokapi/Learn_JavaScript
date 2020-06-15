//require module
/*const Airplane = require('./exportModule.js');
function displayAirplane() {
	console.log(Airplane.myAirplane);
}
displayAirplane();*/

//require untuk export langsung
/*const Airplane = require('./exportModule.js');

console.log(Airplane.displayAirplane());*/

//import from
/*import Airplane from './exportModule';

function displayFuelCapacity() {
	Airplane.availableAirplanes.forEach(function(element){
		console.log('Fuel Capacity of' + element.name + ': ' + element.fuelCapacity);
	})
}

displayFuelCapacity();*/

//import dengan nama variabel
/*import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  })
}

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  })
}

displayFuelCapacity();
displayStaffStatus();*/

//import dengan var

/*import { meetsSpeedRangeRequirements, availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  })
}

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  })
}

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();*/

//import as

/*import { meetsSpeedRangeReqs, aircrafts, flightReqs, meetsStaffReqs } from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  })
}

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff));
  })
}

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element) {
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
}

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();*/