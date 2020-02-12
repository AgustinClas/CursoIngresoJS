function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;

	numero = Math.floor(Math.random()* (11 - 1)) + 1;

	console.log(numero);

	if(numero>=4) {

		if(numero<=8) {
			alert( numero + " APROBÓ")

		} else {

			alert( numero + " EXCELENTE")
		}
		
	} else {

		alert( numero + " Vamos,la proxima se puede")
	}


}//FIN DE LA FUNCIÓN