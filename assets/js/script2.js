// //pregunta la cantidad de juegos 
var numJuegos = parseFloat(prompt("ingrese un numero de veces que desea jugar"));

i = 0;
while (i < numJuegos) {
    debugger;

    // array opcines
    var opciones = ["Piedra", "Papel", "Tijera"];

    // pregunta la jugada que elegiras
    var jugador1 = prompt("Escribe tu respuesta en numero \n Piedra = 0 \n Papel = 1 \n Tijera = 2");

    //Genera un numero aleatorio
    function aleatorio(){
        return Math.floor( Math.random() *3);
    }

    // almaceno 
    var respuestaJs = aleatorio();

    // piedra
    if(jugador1 == 0 || jugador1 == undefined || jugador1 == null){
        alert(`has elejido ${opciones[jugador1]} y la maquina ${opciones[respuestaJs]}`);

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
    }else if(jugador1 == 1 || jugador1 == undefined || jugador1 == null){
        alert(`has elejido ${opciones[jugador1]} y la maquina ${opciones[respuestaJs]}`);

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
    }else if(jugador1 == 2 || jugador1 == undefined || jugador1 == null){
        alert(`has elejido ${opciones[jugador1]} y la maquina ${opciones[respuestaJs]}`);

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

    i++;
}

alert("Fin del juego, has jugado "+ i + " veces... adios");