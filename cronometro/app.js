const display = document.getElementById('txtDisplay');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnRestart = document.getElementById('btnRestart');

let tiempo; 
let playPausa = true;
let segundos = 0;
let minutos = 0;
let horas = 0;

btnPlayPause.addEventListener('click', function () {
  if (playPausa) {
    tiempo = setInterval(comenzar, 1000);
    btnPlayPause.innerHTML = '<img src="/cronometro/img/pause-circle-fill.svg" alt="boton play">'; 
  } else {
    clearInterval(tiempo);
    btnPlayPause.innerHTML = '<img src="/cronometro/img/play-circle-fill.svg" alt="boton play">'; 
  }
  playPausa = !playPausa;
});

btnRestart.addEventListener('click', function () {
  clearInterval(tiempo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  mostrarEnDisplay();
  btnPlayPause.innerHTML = '<img src="/cronometro/img/play-circle-fill.svg" alt="boton play">';
  playPausa = true; 
});

function comenzar() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;

    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }

  mostrarEnDisplay();
}

function mostrarEnDisplay() {
    const segundosStr = segundos.toString().padStart(2, '0');
    const minutosStr = minutos.toString().padStart(2, '0');
    const horasStr = horas.toString().padStart(2, '0');
  
    display.innerText = horasStr + ":" + minutosStr + ":" + segundosStr;
  }
