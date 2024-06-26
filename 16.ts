/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/

let guest:string[] = ["ayesha","farhat","yasmeen"]

console.log("great i found a bigger dinner table")
guest.unshift("ahmed")
guest.push("ali")
guest.splice(guest.length/2, 0,"asad")
guest.forEach(guest=>{
    console.log(`${guest} would you like me to join at dinner`)
})
