function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5){
		numero = NaN
		
		while (isNaN(numero)){

			numero = prompt("Ingrese un numero")
			numero = parseInt(numero)
		}
	contador++;
	acumulador = acumulador + numero
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
// cantdadDeIntentos = prompt("cuantos numeros desea ingresar?") para `pedir primero cantidad de nuneros a ingresar