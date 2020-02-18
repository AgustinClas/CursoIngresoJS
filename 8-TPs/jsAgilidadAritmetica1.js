/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
    var operador;

    document.getElementById("PrimerNumero").value = Math.floor(Math.random() * (11 - 1)) + 1;
    document.getElementById("SegundoNumero").value = Math.floor(Math.random() * (11 - 1)) + 1;
    operador = Math.floor(Math.random() * (5-1)) + 1;

    console.log(operador);

    switch (operador){
        case 1:
            document.getElementById("Operador").value = "+"
            break;
        case 2:
            document.getElementById("Operador").value = "-"
            break;
        case 3:
            document.getElementById("Operador").value = "*"
            break;
        case 4:
            document.getElementById("Operador").value= "/"
            break;

    }

    
	

}//FIN DE LA FUNCIÓN
function Responder()
{
    var operador;
    var numero1;
    var numero2;
    var resultadoUsuario;
    var resultado;
    
    operador = document.getElementById("Operador").value;
    numero1 = parseInt(document.getElementById("PrimerNumero").value);
    numero2 = parseInt(document.getElementById("SegundoNumero").value);
    resultadoUsuario = parseInt(document.getElementById("Respuesta").value);

	switch (operador){
        case "+":
            resultado = numero1 + numero2            
            if (resultado == resultadoUsuario){
                alert("El resultado es correcto")
            }else {
                alert("El resultado es incorrecto")
            }
            break;
        case "-":
            resultado = numero1 - numero2
            if (resultado == resultadoUsuario){
                alert("El resultado es correcto")
            }else {
                alert("El resultado es incorrecto")
            }
            break;
        case "*":
            resultado = numero1 * numero2
            if (resultado == resultadoUsuario){
                alert("El resultado es correcto")
            }else {
                alert("El resultado es incorrecto")
            }
            break;
        case "/":
            resultado = numero1 / numero2
            if (resultado == resultadoUsuario){
                alert("El resultado es correcto")
            }else {
                alert("El resultado es incorrecto")
            }
            break;
    }

}

//FIN DE LA FUNCIÓN
