function myFunction(){
    console.log("Hey what's up!");
    console.log("How are you?");
}

myFunction();

console.log("----------------------------------")

function sum(a,b){
    console.log(a + b);
}
sum(5,5)

console.log("----------------------------------")


const arrowSum = (a,b) => {
    console.log(a+b);
}

console.log("----------------------------------")


const printHello = () =>{
    console.log("Hello")
}

console.log("----------------------------------")

//count no. of vowels
function countVowels(string){
    let count = 0;
    for(const char of string){
        if (char == "a"|| char == "e" || char == "i" || char == "o" || char == "u"){
            count ++;
        }
    }
    return count;
}

//arrow function count vowels
const countVow = (string) => {
    let count = 0;
    for(const char of string){
        if (char == "a"|| char == "e" || char == "i" || char == "o" || char == "u"){
            count ++;
        }
    }
    return count;
}

console.log("----------------------------------")

let arr = [2,3,4,5,6]

arr.forEach((num) => {
    console.log(num * num); //or num**2
})


console.log("----------------------------------")


let marks = [60,70,80,91,93,95]

let newarray = marks.filter((value) =>{
    return value>90;
})

console.log(newarray)


console.log("----------------------------------")

let array = [2,4,6,77,8,9]

const output = array.reduce((prev,next) => {
    return prev + next;
})

console.log(output)

console.log("----------------------------------")


let greaterno = [22,43,51,105,4,67,89]

const output2 = greaterno.reduce((result,current) =>{
    return result < current? current : result
})
console.log(output2)



console.log("----------------------------------")



let n = prompt("Enter num:");
let arrayN =[];

for(let g=1 ; g<=n ;g++){
    arrayN[g-1] = g
}
console.log(arrayN)

let suM = arrayN.reduce((res,curr) =>{
    return res + curr;
})
console.log("Sum:",suM)

let factorial = arrayN.reduce((res,curr) =>{
    return res * curr
})
console.log("Factorial:",factorial)


console.log("----------------------------------")
console.dir(document);


