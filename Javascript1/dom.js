let h1 = document.querySelector("h1");
console.dir(h1.innerText);

h1.innerText = h1.innerText + "How are you!"

let divs = document.querySelectorAll(".box");
console.dir(divs[0]);

let idx = 1;
for(div of divs){
    div.innerText = `new value ${idx}`;
    idx++;
}