// array opcines
var opciones = ["Piedra", "Papel", "Tijera"];

// pregunta la jugada que elegiras
var jugador1 = prompt("Escribe tu respuesta en numero \n Piedra = 0 \n Papel = 1 \n Tijera = 2");
console.log(`has elgido ${opciones[jugador1]}`);

//Genera un numero aleatorio
function aleatorio(){
	return Math.floor( Math.random() *3);
}
var respuestaJs = aleatorio();
console.log(`la maquina elgio ${opciones[respuestaJs]}`);

debugger;

// piedra
if(jugador1 === 0 || jugador1 === undefined || jugador1 === null ){
    debugger;
    alert(`has elejido ${opciones[jugador1]} y la maquina eligio ${opciones[respuestaJs]}`);

    if(respuestaJs == 0){
        alert("Empate!");
    }

    else if(respuestaJs == 1){
        alert("Perdiste!");
    }

    else if(respuestaJs == 2){
        alert("Ganaste!");
    }

//papel 
}else if(jugador1 == 1 || jugador1 === undefined || jugador1 === null){
    alert(`has elejido ${opciones[jugador1]} y la maquina eligio ${opciones[respuestaJs]}`);

    if(respuestaJs == 0){
        alert("Ganaste!");
    }    
    else if(respuestaJs == 1){
        alert("Empate!");
    }    
    else if(respuestaJs == 2){
        alert("Perdiste!");
    }

// tijera
}else if(jugador1 == 2 || jugador1 === undefined || jugador1 === null){
    alert(`has elejido ${opciones[jugador1]} y la maquina eligio ${opciones[respuestaJs]}`);

    if(respuestaJs == 0){
        alert("Perdiste!");
    }
    
    else if(respuestaJs == 1){
        alert("Ganaste!");
    }
    
    else if(respuestaJs == 2){
        alert("Empate!");
    }

}else{
    alert("ingresa la opcion carrecta")
}


  
  
