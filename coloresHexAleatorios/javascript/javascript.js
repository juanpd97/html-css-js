const btnCambiarColor = document.getElementById('btn-cambiarColor');
const text = document.getElementById('texto');

let codigoHexadecimal = '';


btnCambiarColor.addEventListener('click', function(){
        codigoHexadecimal= '#';
        generarCodigoHex();
        text.textContent = codigoHexadecimal;
        document.body.style.backgroundColor = codigoHexadecimal;
    
});

function generarCodigoHex(){

    for(let i=0 ; i<6 ;i++){
            
        let randomDecimal = Math.floor(Math.random() * 16);

        if(randomDecimal === 10){
            codigoHexadecimal += 'A';
            } else if(randomDecimal === 11){
                codigoHexadecimal += 'B';
            } else if(randomDecimal === 12){
                codigoHexadecimal += 'C';
            } else if(randomDecimal === 13){
                codigoHexadecimal += 'D';
            } else if(randomDecimal === 14){
                codigoHexadecimal += 'E';
            }else if(randomDecimal === 15){
                codigoHexadecimal += 'F';
            } else{
                codigoHexadecimal += randomDecimal;
            }
    }
}