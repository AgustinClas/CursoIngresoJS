function mostrar()
{
	var numero;
	var contador=0;
	var positivo = 0;
	var negativo=1;
	var respuesta='si';

	while (respuesta == "si"){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		respuesta = prompt("Desea continuar?");
		if(numero >= 0){
			positivo = positivo + numero;
		}else {
			negativo = negativo * numero;
		}
	}
	
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN 