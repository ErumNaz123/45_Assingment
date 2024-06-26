"use strict";
/*41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/
let magicianName = ["sami", "fahad", "ahad"];
function show_magicians(magicianName) {
    //let magicianName:string[]=["sami" ,"fahad" ,"ahad"]
    magicianName.forEach(magicianName => {
        console.log(magicianName);
    });
    return magicianName;
}
show_magicians(magicianName);
