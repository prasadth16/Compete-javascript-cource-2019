//Initializing and declaring the array
var numberArray=[1,4,5,7,3,8,10];
console.log(numberArray);
//Pushed- added element in array at the end of it. 
numberArray.push(12);
console.log(numberArray);
//Add element in the begining of the array
numberArray.unshift(56);
console.log(numberArray);
//Remove element from the array
numberArray.pop();
console.log(numberArray);
//Remove element from the begining of the array
numberArray.shift();
console.log(numberArray);
//Slicing the original array
console.log(numberArray.slice(2,4));
