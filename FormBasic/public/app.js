
// document.querySelector('#btn').addEventListener("click", () => {
//     const name = document.querySelector("#name").value;
//     const email = document.querySelector("#email").value;
//     const password = document.querySelector("#password").value;
//     const date = document.querySelector("#date").value;
//     const message = document.querySelector("#message").value;

//     if (!name || !email || !password || !date || !message) {
//         alert("Please fill in all fields!");
//         return;
//     }

//     const data = {
//         name: name,
//         email: email,
//         password : password,
//         date : date,
//         message : message
//     };

//     const jsonStr = JSON.stringify(data, null, 2);

//     document.querySelector("#jsonOutput").textContent = jsonStr;

//     localStorage.setItem("formData", jsonStr);

//     alert("Data Saved");
// })

gsap.from("#h-right",{
    x:-700, duration:2, delay:0.5
})

var tl = gsap.timeline(); ///////////
tl.from("h1",{
    y:-20, opacity:0, duration:1, delay:0
})
tl.from("h3",{
    y:-30, opacity:0, duration:1, delay:0, stagger:0.5
})
tl.from("h2",{
    y:-20, opacity:0, duration:1, // delay:0.2
})

var tl2 = gsap.timeline(); ////////////
tl2.from("label",{
    y:-10, duration:0.5, opacity:0, delay:1, stagger:0.2
})
tl2.from("input",{
    y:-10, duration:1, delay:0.1, opacity:0, stagger : 0.2
})
tl2.from("textarea",{
    y:-10, duration:1, delay:0, opacity:0
})
tl2.from("#btn",{
    y:40, duration:1, opacity:0, // delay:0.5
})

// document.querySelector('#btn').addEventListener("click", () => {
//     const name = document.querySelector("#name").value;
//     const email = document.querySelector("#email").value;
//     const password = document.querySelector("#password").value;
//     const date = document.querySelector("#date").value;
//     const message = document.querySelector("#message").value;

//     if (!name || !email || !password || !date || !message) {
//         alert("Please fill in all fields!");
//         return;
//     }

//     const data = {
//         name: name,
//         email: email,
//         password: password,
//         date: date,
//         message: message
//     };

//     const jsonStr = JSON.stringify(data, null, 2);    
//     document.querySelector("#jsonOutput").textContent = jsonStr;
//     localStorage.setItem("formData", jsonStr);

//     // Send data to -> server
//     const response = fetch('/save', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)
//     });
    
//     if (response) {
//         alert("Data saved successfully!");
//     } 
//     else {
//         alert("Error saving data.");
//     }
    
// });

// ...existing code...

document.querySelector('#btn').addEventListener("click", async () => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const date = document.querySelector("#date").value;
    const message = document.querySelector("#message").value;

    if (!name || !email || !password || !date || !message) {
        alert("Please fill in all fields!");
        return;
    }

    const data = {
        name: name,
        email: email,
        password: password,
        date: date,
        message: message
    };

    const jsonStr = JSON.stringify(data, null, 2);    
    document.querySelector("#jsonOutput").textContent = jsonStr;
    localStorage.setItem("formData", jsonStr);

    // Send data to -> server
    try {
        const response = await fetch('/save', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const text = await response.text();
        alert(text);
    } catch (err) {
        alert("Error saving data.");
    }
});