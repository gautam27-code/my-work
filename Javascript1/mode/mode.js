let btn1 = document.querySelector("#button");
let currMode = "light";
let body = document.querySelector("body");

btn1.addEventListener("mouseover" , () => {
    if(currMode === "light"){
        body.classList.remove("light");
        currMode = "dark";
        body.classList.add("dark");
    }else{
        body.classList.remove("dark");
        currMode = "light";
        body.classList.add("light");
    }
    console.log(currMode);
});