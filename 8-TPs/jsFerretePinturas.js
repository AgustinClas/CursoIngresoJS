/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit 
    var centigrados

    fahrenheit = document.getElementById("Temperatura").value

    centigrados = (fahrenheit - 32) * (5/9)

    console.log(fahrenheit)
    console.log(centigrados)

    alert(fahrenheit + "º Fahrenheit son " + centigrados + "º Centigrados")
}

function CentigradosFahrenheit () 
{
	var centigrados
    var fahrenheit

    centigrados = document.getElementById("Temperatura").value

    fahrenheit = (centigrados * (9/5)) + 32

    alert(fahrenheit) 

}
