//jumlah mahasiswa
/*var mahasiswa;*/

//nilai para mahasiswa
var nilai = [10, 35, 70, 40, 55, 35, 20, 65, 60];
// var nilai = 75;
// var nilai = 80;
// var nilai = 93;
// var nilai = 78;

//konversi nilai ke huruf
for(i=0;i<35;i++)
	if(nilai[i]<26){
		console.log('E');
	} else if(nilai[i]<46){
		console.log('D');
	} else if(nilai[i]<61){
		console.log('C');
	} else if(nilai[i]<71){
		console.log('C+');
	} else if(nilai[i]<76){
		console.log('B-');
	}

//tampilkan hasil