let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 'read this!'
};
console.log(spaceship['Active Duty']);   // Returns true
console.log(spaceship['Fuel Type']);   // Returns  'Turbo Fuel'
console.log(spaceship.numCrew);   // Returns 5
console.log(spaceship['!!!!!!!!!!!!!!!']);   // Returns undefined
let returnAnyProp = (objectName, propName) => {
	return objectName[propName];
}

console.log(returnAnyProp(spaceship, 'homePlanet'));
