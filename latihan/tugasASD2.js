let bacStart = 1
let amoStart = 1
let time = 3

const testing = () => {
	if (bacStart < 0 || amoStart < 0 || time < 0) {
		console.log('tidak boleh bilangan negatif')
	} else {
		for (let i = 0; i < time; i++) {
			bacStart = bacStart * 4
			amoStart = amoStart * 2
			bacEatByAmo = amoStart * 4
			bacEnd = bacStart - bacEatByAmo
			bacStart = bacEnd
			if (bacEnd <= 0) {
				bacEnd = 0
				break;
			}
		}
		console.log(`tersisa ${bacEnd} bakteri dan ${amoStart} amoba`)
	}
}
console.log(typeof.bacStart)
testing()