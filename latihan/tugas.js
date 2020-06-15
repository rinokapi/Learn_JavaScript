var mobilSkrg = []
const tambah = tambahMobil => { //fungsi tambah mobil ke parkiran
	if (mobilSkrg.includes(tambahMobil) === true) { //cek apakah mobil sudah ada atau belum
		console.log(`Maaf mobil no ${tambahMobil} sudah ada di parkian!`)
	} else if (mobilSkrg.length < 10) { //cek apakah bisa ditambah atau tidak
		mobilSkrg.push(tambahMobil) //tambah mobil
		console.log(`Mobil no ${tambahMobil} sudah di parkiran!`)
	} else { //kalau parkiran penuh
		console.log('Maaf parkiran sudah penuh!')
	}
}
const hapus = hapusMobil => { //fungsi hapus mobil dari parkiran
	if (mobilSkrg.length > 0 && mobilSkrg.length <= 10) { //cek apakah ada mobil atau tidak
		var index = mobilSkrg.indexOf(hapusMobil) //cek indeks mobil yang akan dihapus
		if (index > -1) {
			mobilSkrg.splice(index, 1); //hapus mobil sesuai index
			console.log(`Mobil no ${hapusMobil} sudah keluar dari parkiran!`)	
		} else { //kalau mobil yang dimaksud tidak ada di parkiran
			console.log(`Maaf mobil no ${hapusMobil} tidak ada di parkiran!`)
		}
	} else { //kalau tidak ada mobil di parkiran
		console.log('Maaf parkiran kosong!')
	}
}

/*tambah mobil*/
tambah(10)
tambah(12)
//tambah(13)

/*hapus mobil*/
//hapus(2)
//hapus(3)
//hapus(4)

console.log(`\nAda ${mobilSkrg.length} mobil di parkiran saat ini: ${mobilSkrg.join(', ')}\n`) //mobil di parkiran