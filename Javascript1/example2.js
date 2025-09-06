//offer for of loop 

let items = [250,654,300,900,50];

let i = 0;
for(let val of items){
    console.log(`value at index ${i} = ${val}`)
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer is = ${items[i]}`);
    i++
}

//offer for loop
let products = [250,645,300,900,50];

for (let j = 0 ;j < products.length ; j++){
    let offer = products[j] / 10;
    products[j] -= offer;
}

console.log(products);


//////////////////////////////////////
console.log("---------------------")//
//////////////////////////////////////

let companies = ["Microsoft" , "Bloomberg" , "Uber" , "Apple" , "Tata"]
console.log(companies)

companies.shift()
console.log(companies)

companies.splice(1,1,"Ola")
console.log(companies)

companies.push("Amazon")
console.log(companies)

