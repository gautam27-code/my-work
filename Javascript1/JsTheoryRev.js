let arr1 = [1,2,3,4,5]
let arr2 = arr1;
arr2.push("Berg")
// "berg" is pushed in arr1 also => assign one array to another,
// both variables point to the same array in memory.
console.log(arr1)
console.log(arr2)

let arr3 = [10,20,30,40,50]
let arr4 = arr3.slice(0).concat(["Man"])
arr4.push("Berg")
console.log(arr3)
console.log(arr4)

let arr5 = ["Hello","Me"]
let [item1, item2] = arr5;
console.log(item1) //assignig value to variables
console.log(item2)


//Reverse String
let str = "Hello world"
function revStr(str){
    return str.split("").reverse().join("")
}
console.log(revStr(str))

function show(){
    var dt = new Date()
    var weekDay = dt.toLocaleDateString('default',{weekDay: 'long'})

    var day = dt.getDay();
    var month = dt.getMonth();
    var weekday = dt.weekDay();

    document.getElementById("date").innerText = Weekday +", "+day+ ", " +month

}
///////////
var arr = new Array();
arr[0] = 1;
arr[2] = 3;
console.log(arr[1]);

var at = [2,4,6,80,2,6,7]
console.log(at.sort());

//dynamically crete btn
let cont = document.querySelector(".container");
let btn = document.createElement("button");
btn.textContent = "Click me";
cont.appendChild(btn);
btn.onclick = () => {
    document.body.style.backgroundColor = "Black";
}
///////////
let n = 4;
let fact = 1;
for(let i=1; i<=n; i++){
    fact *= i;
}
console.log(fact);

/////////// 









