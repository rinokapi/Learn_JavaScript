/ The examples will make it clear

let x = 15; // x has a value of 15
const y = x++;
// since it is postfix , the value of x (15) is first assigned to y and then the value of x is incremented by 1
console.log(y); // 15
console.log(x); // 16

let a = 15; // a has a value of 15
const b = ++a;
// since it is prefix , the value of a (15) is first incremented by 1 and then the value of x is assigned to b
console.log(b); // 16
console.log(a); // 16