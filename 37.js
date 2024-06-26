"use strict";
/*
37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/
function make_shirt(size = "large", message = "i love typescript") {
    console.log(`making a shirt size in ${size} with a ${message} print on a shirt `);
}
make_shirt();
make_shirt("medium", "its my style");
make_shirt("small"); //default message set 
