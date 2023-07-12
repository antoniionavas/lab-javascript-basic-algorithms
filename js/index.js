// Iteration 1: Names and Input
let hacker1 = "Antonio"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Pedro"
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals
let charact1 = hacker1.length
let charact2 = hacker2.length


if (hacker1.length > hacker2.length){

    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`)
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
}

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops
let result = ""
let result2 = ""

for (i=0; i < hacker1.length - 1; i++){
    result += hacker1[i].toUpperCase() + " ";
}

console.log(result)

for (i = hacker2.length - 1; i >= 0; i--){
    result2 += hacker2[i] + " ";
}

console.log(result2)

if (hacker1 > hacker2) {  
    console.log("The driver's name goes first.");} 
else if (hacker2 > hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
     console.log("What?! You both have the same name?");
    }