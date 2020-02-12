function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero

	//Math.floor(Math.random() * (max - min)) + min    formula

	numero =  Math.floor(Math.random() * (11 - 1)) + 1

	console.log(numero)

	alert(numero)

}//FIN DE LA FUNCIÓN