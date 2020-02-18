function mostrar()
{

	var numero = 15;

	while (numero > 9 || numero < 0 || isNaN(numero)){
		numero = prompt("Ingrese un numero valido");
		numero = parseInt(numero)
	}
	if (numero < 10 && numero > (-1)){
		document.getElementById("Numero").value = numero;

	} 


}//FIN DE LA FUNCIÓN