const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
console.log(animals.map(newWord => newWord[0]))
//console.log(secretMessage);
//console.log(secretMessage.join(''));
/*Add your code under the animals array and before the line console.log(secretMessage.join(''));

Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.*/
// .reduce() untuk menghitung jumlah semua elemen dalam array (mis. berisi angka)
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((a, c) => {
  console.log('The value of accumulator: ', a);
  console.log('The value of currentValue: ', c);
  return a + c;
});
console.log(newSum);
