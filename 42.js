"use strict";
/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
let magicians123 = ["Sami", "Fahad", "Ahad"];
function make_great2(magicians123) {
    for (let i = 0; i < magicians123.length; i++) {
        magicians123[i] = magicians123[i] + " The Great";
    }
}
make_great2(magicians123);
console.log(magicians123);
