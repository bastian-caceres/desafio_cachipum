// //pregunta la cantidad de juegos 
var numJuegos = parseFloat(prompt("ingrese un numero de veces que desea jugar"));

x = 1;
i = 0;
while (i < numJuegos) {
    debugger;

    // array opcines
    var opciones = ["Piedra", "Papel", "Tijera"];

    // pregunta la jugada que elegiras
    var jugador1 = prompt(`Ronda Nº ${x} \n \n Escribe tu respuesta en numero \n Piedra = 0 \n Papel = 1 \n Tijera = 2 `);

    //Genera un numero aleatorio
    function resMaquina(){
        return Math.floor( Math.random() *3);
    }

    // almaceno 
    var respuestaJs = resMaquina();

    if(jugador1 == 0 || jugador1 == 1 || jugador1 == 2){
        alert(`Has elejido ${opciones[jugador1]} y la maquina ${opciones[respuestaJs]}`);
    
        if( (respuestaJs == 0 && jugador1 == 0) || (respuestaJs == 1 && jugador1 == 1) || (respuestaJs == 2 && jugador1 == 2)){
            alert("Empate!");
        }
    
        else if((respuestaJs == 1  && jugador1 == 0) || (respuestaJs == 2  && jugador1 == 1) || (respuestaJs == 0  && jugador1 == 2)){
            alert("Perdiste!");
        }
    
        else if((respuestaJs == 2 && jugador1 == 0) || (respuestaJs == 0 && jugador1 == 1) || (respuestaJs == 1 && jugador1 == 2)){
            alert("Ganaste!");
        }
        else{
            alert("ingresa la opcion carrecta")
        }
    }
    x++;
    i++;
}

alert(`Fin del juego, has jugado ${i} veces... adios`);


