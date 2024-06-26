/*: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests*/

let guest2 : string[] = ["ali","jawaad","osama","rehmat"]


console.log("unfortunately i can invite only two person");

while(guest2.length>2){
let removedGuest = guest2.pop();
console.log(`sorry , ${removedGuest} i cant invite you`);
}

guest2.forEach(guest2 =>{
    console.log(`dear ${guest2} still you are invited `)
});

guest2.splice(guest2.length,2);
console.log(guest2);

guest2.shift()
console.log(guest2)
guest2.shift()
console.log(guest2)

