function mostrar()
{

	var contador=0;
	var numero;
	var numeroMax;
	var numeroMin;
	var respuesta; 
	respuesta = true;
	numeroMin = NaN
	numeroMax = NaN
	while (respuesta){
		numero = prompt("Ingrese su numero");
		numero = parseInt(numero)
		if (isNaN(numeroMin)){                 //el profesor hizo una bandera para marcar la primera vez
			numeroMin = numero                 // en vez de hacer if y else 
		} else if (numero < numeroMin){
			numeroMin = numero
		}
		if (isNaN(numeroMax)){
			numeroMax = numero
		}else if (numero > numeroMax){
			numeroMax = numero
		}
		
		respuesta = confirm("Desea continuar?")
		console.log(numeroMax)
		console.log(numeroMin)
		}

	document.getElementById("maximo").value = numeroMax
	document.getElementById("minimo").value = numeroMin		
}
//FIN DE LA FUNCIÓN 