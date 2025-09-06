//Social Profile i.e. Linkdin
const profile = {
    name : "Gautam",
    isVerified : true,
    posts : 200,
    followers : 1000,
    following : 500,
    isFollow : false,
    bioName : "Gautam Jain",
    bio: "Artist",
}
console.log(profile)
console.log(typeof profile["name"])


//////////////////////////////////////
console.log("---------------------")//
//////////////////////////////////////


//EVEN NUM
for(let i=0 ;i<=20; i++){
    if(i % 2 === 0)
    console.log("Even num",i)
}

//////////////////////////////////////
console.log("---------------------")//
//////////////////////////////////////

// let gameNum = 25;
// let userNum = prompt("Enter correct number:");

// while(userNum != gameNum){
//     userNum = prompt("Wrong nubmer, Enter again");
// }

// console.log("You entered correct number : 25");


//////////////////////////////////////
console.log("---------------------")//
//////////////////////////////////////

let obj = {
    item : "pen",
    price : 10,
}
console.log(`The price of ${obj.item} is ${obj.price} `) //Template literals ${}
console.log("The price of", obj.item , "is" , obj.price )

//////////////////////////////////////
console.log("---------------------")//
//////////////////////////////////////

console.log("Hello\nwelcome");
console.log("Hello\twelcome");

let str = "Hello\nwelcome" // \n is counted as 1 for length
console.log(str.length)


//////////////////////////////////////
console.log("---------------------")//
//////////////////////////////////////


let firstName = prompt("Enter First Name")
let lastName = prompt("Enter last Name")

Fullname = firstName.concat(lastName)
length = Fullname.length

username = "@" + Fullname + length
console.log(username)

//////////////////////////////////////
console.log("---------------------")//
//////////////////////////////////////

//not running
let marks = [85,97,44,37,76,60];

let sum = 0;
for(let val of marks){
    sum = sum + val;
}

let avg = sum / marks.length;
console.log(avg);