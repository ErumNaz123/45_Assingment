"use strict";
/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//equality with string
console.log("testing equality ");
console.log("apple" == "apple");
console.log("apple" == "Apple");
//lower case Function
console.log("testing with lower case function");
console.log("Apple".toLowerCase() == "apple");
//numerical test
console.log("numerical test");
console.log(7 > 3);
console.log(10 < 9);
//and or
console.log("test using and or");
console.log(true && false);
console.log(true || false);
//array
let myGoodName = ["erum", "ahad", "ayesha", "saad"];
console.log("is ayesha in array ?");
console.log(myGoodName.includes("ayesha"));
console.log("is fatima in array ?");
console.log(!myGoodName.includes("fatima"));
