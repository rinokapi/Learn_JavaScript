//export module
/*let Airplane = {};
Airplane.myAirplane = "StarJet";
module.exports = Airplane;*/
//export langsung object
/*module.exports = {
	myAirplane: 'Cloud',
	displayAirplane: function() {
		return this.myAirplane;
	}
};*/

//export default
/*let Airplane = {};
Airplane.availableAirplanes = [
	{
		name: 'AeroJet',
		fuelCapacity: 800
	},
	{
		name: 'SkyJet',
		fuelCapacity: 500
	}
];
export default Airplane;*/

//export dengan nama variabel
/*let flightRequirements = {
  requiredStaff: 4
};

let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators',]
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
  }
];

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

export { availableAirplanes, flightRequirements, meetsStaffRequirements };*/

//export langsung di variabelnya
/*export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if(range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
}

export let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators',],
    maxSpeed: 1200,
    minSpeed: 300
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants'],
    maxSpeed: 800,
    minSpeed: 200
  }
];

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}*/

//export as

let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if(range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
}

let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators',],
    maxSpeed: 1200,
    minSpeed: 300
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants'],
    maxSpeed: 800,
    minSpeed: 200
  }
];

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };