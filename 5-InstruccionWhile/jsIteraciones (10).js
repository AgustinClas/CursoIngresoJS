function mostrar()
{
	var acPositivo = 0;
	var acNegativo = 0;
	var cdorPositivo = 0;
	var cdorNegativo = 0; 
	var cdorCeros = 0;
	var cdorPares = 0;
	var promedioPositivos;
	var promediosNegativos;
	var diferencia;
	var respuesta;
	respuesta = true;
	
	while(respuesta){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		if (numero < 0){
			acNegativo = acNegativo + numero;
			cdorNegativo++;
		}
		if (numero > 0){
			acPositivo = acPositivo + numero,
			cdorPositivo++;
		}
		if (numero == 0){
			cdorCeros++;
		}
		if ((numero % 2) == 0 && numero != 0){
			cdorPares++;
		}
		promedioPositivos = acPositivo / cdorPositivo;
		promediosNegativos = acNegativo / cdorNegativo;
		diferencia = acPositivo + acNegativo;
		respuesta = confirm("Continuar?");
	}
	
	document.write(
		"Suma de los negativos: " + acNegativo +        //"<br>"
		" suma de los positivos " + acPositivo +
		" cantidad de positivos " + cdorPositivo +
		" cantidad de negativos " + cdorNegativo +
		" cantidad de ceros " + cdorCeros +
		" cantidad de numeros pares " + cdorPares +
		" promedio de positivos " + promedioPositivos + 
		" promedio de negativos " + promediosNegativos +
		" diferencia entre positivos y negativos " + diferencia)

					
}//FIN DE LA FUNCIÓN