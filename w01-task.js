let n1 = '1' ;
let n2 = 2 ;
let r = 0 ;
r = Number(n1) + n2
console.log( r );//n1 is string  // r = 4

let num1 = 100;
let num2 = '10';
let sum = num1 + num2 * 1;
console.log("resultado ",sum)

// 🔍 Part 1 error
//const userName = "Moroni";
let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
//const currentDateAndTime = DateTime;
const currentDateAndTime = new Date();
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error. The following statement calls a function named total that 
//accepts any number of arguments and returns the sum. 
//The returned value is stored in a variable named theTotal. 1-10 are the arguments.

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
	let sum = 0;
	for (let aNumber of theNumbers) {
		sum += aNumber * 1; // Why do we use * 1? It implicitly converts a string to a number.
	}
	return sum
}
