const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
//.forEach seperti menggantikan for, pakai function untuk menampilkan tiap 1 elemen
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];
//.map seperti melaksanakan perintah pada setiap elemen dalam array numbers
const a = numbers.map(number => {
	return number * 100;
});
console.log(a);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
//.filter akan menampilkan elemen sejenis dalam array sesuai perintah kita
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
// .findIndex untuk mencari di-index keberapa elemen yang dicari berdasarkan kondisi yang telah dibuat
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
});
console.log(foundAnimal);
console.log(startsWithS);