const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click',function(i){
        console.log("Clicked");
        if(i.target.id === 'green'){
            body.style.backgroundColor = i.target.id;
        }
        if(i.target.id === 'blue'){
            body.style.backgroundColor = i.target.id;
        }
        if(i.target.id === 'yellow'){
            body.style.backgroundColor = i.target.id;
        }
        if(i.target.id === 'red'){
            body.style.backgroundColor = i.target.id;
        }
    });
});