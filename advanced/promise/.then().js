const {checkInventory} = require('./promise.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
function handleSuccess(resolvedValue) {
  console.log(resolvedValue);
}
function handleFailure(rejectReason) {
  console.log(rejectReason);
}

checkInventory(order)
  .then(handleSuccess, handleFailure);