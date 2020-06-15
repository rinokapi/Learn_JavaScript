/*let objPlaces = {a : 'Padarambu', b : 'Mabakou', c : 'Kalapandu', d : 'Waewole', e : 'Lekolembo', f : 'Padarambi'}

search = word => {
	for (let value in objPlaces) {
		if (objPlaces[value].includes(word) === true) {
			console.log(`ini ${objPlaces[value]}!`)
		} else {
			// N/A
		}
	}
}
*/
let arrPlaces = ['Padarambu', 'Mabakou', 'Kalapandu', 'Waewole', 'Lekolembo', 'Padarambi']

search = word => {
	//var test = arrPlaces.findIndex(place => place === word)
	arrPlaces.forEach(arrPlace => {
		if (arrPlace.includes(word) === true) {
			console.log(`file ${arrPlace} found!`)
		} else {
			// N/A
		}
	})
}

search('Pa')

console.log()