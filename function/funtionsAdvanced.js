const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};
checkThatTwoPlusTwoEqualsFourAMillionTimes()

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

//soal...
/*
Write a higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value. It should call the argument function with the value two times. If the callback function produces the same result twice, it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results'
Invoke your checkConsistentOutput() with the addTwo() function we wrote and a number as arguments.
*/

const addTwo = num => num + 2;
const checkConsistentOutput = (myFunc, myVal) => {
	myFunc = addTwo;
  	let firstCall = myFunc(myVal);
  	let secondCall = myFunc(myVal);
  	if (firstCall === secondCall) {
    	console.log(firstCall);
  	} else {
    	return 'This function returned inconsistent results';
  	}
};

checkConsistentOutput(addTwo, 5);

/* note this! : Functions can be passed into other functions as parameters, a higher-order function is a function that either accepts functions as parameters, returns a function, or both.*/