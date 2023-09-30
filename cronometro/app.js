const display = document.getElementById('txtDisplay');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnRestart = document.getElementById('btnRestart');

let segundos = 0;
let minutos = 0;
let horas = 0;

btnPlayPause.addEventListener('click', function(){
    setInterval(comenzar,1000);
});

function comenzar(){
    segundos++;

    if(segundos === 60){
        segundos = 0;
        minutos++;

        if(minutos === 60){
            minutos = 0;
            horas++;
        }
    } 

    mostrarEnDisplay();
}

function mostrarEnDisplay(){
    display.innerText = horas + ":" + minutos + ":" + segundos;
}