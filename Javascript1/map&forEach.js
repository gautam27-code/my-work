// //Syntax
// // let newArray = array.map(function(currentValue, index, arr) {
// //     // return element for newArray
// // });

const arr = [1,2,3,4,5,6,7,8]
 const Map = arr.map((num,index,array) => {
    return `Index ${index} : ${num} : from array ${array}`
 })
//creates a new array by calling a callback function on every element of the original array
//not affect original array

 console.log(Map);
 console.log(arr)

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]



//foreach() =  it doesn't return a new array, and instead, it simply iterates over the elements of the array.

const arr2 = [1,2,3,4,5]
const arr3 = []

arr2.forEach((num) =>{
   arr3.push(num * num)
})
console.log(arr3)
let sum = 0
arr2.forEach(num =>{
   sum += num
})
console.log(sum)

// //slice
let arr5 = [0,1,2,3,4,5,6]
arr5.splice(2,2,"John","Cena")
console.log(arr5)

let arr6 = [11,22,33,44,55,66]
let new6 = arr6.slice(1,3)
console.log(new6)

let karr = [10,20,30,40,50,60]
for(let ar in karr)
{
   console.log(ar)
   // console.log(karr[ar])
}
for(let ar of karr)
{
   console.log(ar)
   // console.log(karr[ar])
}


//Multidimension Array
let multiArr = [
   [1,"G"],
   [2,"S"],
   [3,"A"]
]
// console.log(multiArr)
multiArr.forEach((num) => {
   num.forEach((k) => {
      console.log(k)
   })
})

for(let ar of multiArr){
   for(let k of ar){
      console.log(k)
   }
}

