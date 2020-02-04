/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/

function mostrar()
{
var nombre;

nombre = prompt("escribe tu nombre");

document.getelementbyid("elNombre").value = nombre
}

