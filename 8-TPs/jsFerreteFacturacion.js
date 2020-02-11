/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var resultado;

    precio1 = document.getElementById("PrecioUno").value;

    precio2= document.getElementById("PrecioDos").value;
    
    precio3 = document.getElementById("PrecioTres").value;

    precio1 = parseInt(precio1);

    precio2 = parseInt(precio2);

    precio3 = parseInt(precio3);

    resultado = precio1 + precio2 +precio3;

    alert("Tu resultado es " + resultado);



}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var Suma;
    var promedio;

    precio1 = document.getElementById("PrecioUno").value;   
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    suma = precio1 + precio2+ precio3;

    promedio = suma / 3;

    alert("El precio promedio es " + promedio);


}
function PrecioFinal () 
{

    var precio1;
    var precio2;
    var precio3;
    var suma;
    var PrecioFinal;

    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    suma = precio1 + precio2 + precio3;

    resultado = suma * 1.21;

    alert("El precio final es " + resultado );
}