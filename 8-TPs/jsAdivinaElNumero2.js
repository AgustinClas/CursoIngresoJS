/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 0;
var numero

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * (100-1)) +1;
	console.log(numeroSecreto);
}

function verificar()
{
	numero = document.getElementById("numero").value;
	numero = parseInt(numero);
	contadorIntentos++;
	console.log(contadorIntentos);
	if(numeroSecreto==numero){
		switch (contadorIntentos){
			case 1:
				document.getElementById("intentos").value = "1: Usted es un psiquico";
				break;
			case 2:
				document.getElementById("intentos").value = "2: exelente percepcion";
				break;
			case 3:
				document.getElementById("intentos").value = "3: esto es suerte";
				break;
			case 4:
				document.getElementById("intentos").value = "4: exelente tecnica";
				break;
			case 5:
				document.getElementById("intentos").value = "5: usted este en la media";
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				document.getElementById("intentos").value = contadorIntentos + ": falta tecnica";
				break;
			default:
				document.getElementById("intentos").value = contadorIntentos + ": suerte en el amor!"

		}


	}
	

}