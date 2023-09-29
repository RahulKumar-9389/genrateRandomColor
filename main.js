// Genrate Random Color

let changeColor;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i<6; i++){
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



// Change Body color
const start_btn = document.querySelector('.start');
const stop_btn = document.querySelector('.stop');

start_btn.addEventListener('click', function(){
    changeColor = setInterval(function(){
        document.querySelector('body').style.backgroundColor = getRandomColor();
        start_btn.style.backgroundColor= getRandomColor();
        stop_btn.style.backgroundColor= getRandomColor();
        
    }, 1000)
});

stop_btn.addEventListener('click', function(){
    clearInterval(changeColor)
})