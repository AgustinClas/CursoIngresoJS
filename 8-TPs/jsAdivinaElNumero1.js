/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var intentos
  
intentos = 0

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
    numeroSecreto = Math.floor(Math.random() * (101 - 1)) + 1
		//alert(numeroSecreto );
	
  console.log(numeroSecreto)
}

function verificar()
{

  intentos++;

  console.log(intentos);

  document.getElementById("intentos").value = intentos

	if(numeroSecreto == document.getElementById("numero").value) {

    alert("Lo logró y en tan solo " + intentos + " intentos")

  } else {
        if (numeroSecreto > document.getElementById("numero").value){

            alert("Falta para llegar al numero")
        } else {

            alert("Se pasó")
        }

  }

} 