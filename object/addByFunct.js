let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
const greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
}
const remotelyDisable = obj2 => {
  obj2['disabled'] = true
}
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
console.log(typeof greenEnergy);