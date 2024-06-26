/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
 
let magicians: string[] = ["sami", "fahad", "ahad"];

function make_great(magicians: string[]): string[] {
    let great_magicians = [...magicians]; // Create a copy of the array
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] = great_magicians[i] + " the great";
    }
    return great_magicians;
}

function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let great_magicians = make_great(magicians); // Call make_great with a copy of the array

console.log("Original magicians:");
show_magicians(magicians); // Show original array

console.log("\nGreat magicians:");
show_magicians(great_magicians); // Show modified array
