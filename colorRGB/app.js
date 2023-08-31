const inpRojo = document.getElementById('inp-rojo');
const inpAzul = document.getElementById('inp-azul');
const inpVerde = document.getElementById('inp-verde');

const txtRojo = document.getElementById('txt-rojo');
const txtVerde = document.getElementById('txt-verde');
const txtAzul = document.getElementById('txt-azul');

inpRojo.addEventListener('input', function (){
    txtRojo.innerText = inpRojo.value;
    cambiarColorFondo();
});

inpVerde.addEventListener('input', function (){
    txtVerde.innerText = inpVerde.value;
    cambiarColorFondo();
});

inpAzul.addEventListener('input', function (){
    txtAzul.innerText = inpAzul.value;
    cambiarColorFondo();
});

function cambiarColorFondo() {
    let color = 'rgb(59, 132, 115)'
    color = 'rgb(' + inpRojo.value + ',' + inpVerde.value + ',' + inpAzul.value + ')';
    document.body.style.backgroundColor = color;
}