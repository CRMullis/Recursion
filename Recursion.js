/* Collin Mullis
	Chapter 3 Recursion Homework
	Last work on February 1st 2015 
*/
// Creates function that will recurse until the number is equal to 0 and decide if the number is even based on those two numbers.
function isEven(x) {
	if (x == 0)
		return true
	else if (x == 1)
		return false;
	else if (x > 1) 
		return isEven(x - 2);
	else if (x < 1)
		return isEven(x + 2);
	}
console.log(isEven(-7)) 
