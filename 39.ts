/*39. City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.*/


function city_country( city:string , country:string){
    return `${city},${country}` 
}
let response = city_country("Karachi" , "Lahore")
console.log(response)
console.log(city_country("jeddah" , "Saudia"))
console.log(city_country( "austin" ,"USA"))
console.log(city_country("murry" , "Islamabad"))