myRestaurant = menu => {
	if(menu === 1){
		console.log('Pesanan kamu Ayam Bakar, harga Rp.20.000');
	}else if(menu === 2){
		console.log('Pesanan kamu Ikan Bakar, harga Rp.15.000');
	}else if(menu === 3){
		console.log('Pesanan kamu Tempe Goreng, harga Rp.10.000');
	}else{ 
		console.log('menu tidak tersedia');
	}
}
myRestaurant(3);