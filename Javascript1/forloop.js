//FOR LOOP
for(i=1 ; i<=5 ; i++){
    console.log("hello")
}

console.log("-----------------------------")

let sum = 0;
let n = 6;
for (let i = 1; i<=n ; i++) {
    sum = sum + i;
}
console.log("sum :", sum);


console.log("-----------------------------")

//WHILE
let j = 0;
while(j<=5){
    console.log("whats up!");
    j++;
}


console.log("-----------------------------")

//DO_WHILE LOOOP
let k = 1;
do{
    console.log("Do while loop");
    k++;
}while (k<=5);


console.log("-----------------------------")


//FOR-OF LOOP
let str  = "Javascripppt";
let length = 0;

for (let val of str){
    console.log("val =",val);
    length++;
}

console.log("length =",length);

console.log("-----------------------------")



//FOR-IN LOOP
let student = {
    name : Gautam,
    score : 90,
    isPass : true,
}
for(let key in student){
    console.log("key =", key , "value =" , student[key])
}


console.log("-----------------------------")
