let arrPlaces = ['Padarambu', 'Mabakou', 'Kalapanduexe', 'Waewole.exe', 'Lekolembo', 'Padarambi']

search = word => {
	for(let i = 0; i < arrPlaces.length; i++) {
		if (arrPlaces[i].includes(word) === true) {
			console.log(`file ${arrPlaces[i]} found!`)
		} else {
			// N/A
		}
	}
}

search('.exe')