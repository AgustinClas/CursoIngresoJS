/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
var color;

function comenzar()
{
    tiempoInicio = Date.now();
    color = Math.floor(Math.random()* (7-1)) + 1;

    switch (color){
        case 1:
            ColorSecreto = "azul";
            break;
        case 2:
            ColorSecreto = "amarillo";
            break;
        case 3:
            ColorSecreto = "marron";
            break;
        case 4:
            ColorSecreto = "verde";
            break;
        case 5:
            ColorSecreto = "celeste";
            break;
        case 6:
            ColorSecreto = "rojo";
            break;
        }
    
    document.getElementById("ColorElejido").value = ColorSecreto;

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
    var tiempo;
    var tiempoFinal;
    tiempo = Date.now();
    tiempoFinal = (tiempo - tiempoInicio) / 1000;

    if (colorParametro == ColorSecreto) {
        alert("Usted tardó " + tiempoFinal + " segundos");
    }else {
        alert("Usted se equivocó");
    }

}//FIN DE LA FUNCIÓN
