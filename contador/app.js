const display = document.getElementById('txtDisplay');
const btnMas = document.getElementById('btnMas');
const btnMenos = document.getElementById('btnMenos');
const btnReset = document.getElementById('btnReset');

let numero = 0;

btnMas.addEventListener('click', () =>{
    numero++;
    mostrarDisplay();
});

btnMenos.addEventListener('click', () => {
    numero--;
    mostrarDisplay();
});

btnReset.addEventListener('click', () => {
    numero = 0;
    mostrarDisplay();
});

function mostrarDisplay(){

    if(numero > 0){
        display.style.color = 'green';
    } else if(numero < 0){
        display.style.color = 'red';
    } else if(numero == 0){
        display.style.color = 'black';
    }

    display.innerText = numero;
}