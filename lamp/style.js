let zoom1 = document.querySelector('#zoom');

zoom1.onclick = () => {
    console.log("Image clicked");
};


//////////////////////////////////////////////

let modeBtn = document.querySelector('#mode');
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
});
