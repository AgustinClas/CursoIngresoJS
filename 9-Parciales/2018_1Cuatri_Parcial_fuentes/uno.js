
function mostrar()
{
    var ancho=prompt("Ingrese el ancho del terreno");
    var largo=prompt("Ingrese el largo del terreno");

    ancho=parseFloat(ancho);
    largo=parseFloat(largo);

    while(isNaN(ancho)|| ancho < 0){
        ancho=prompt("Ingrese el ancho correspondiente");
    }
    while(isNaN(largo)||largo < 0){
        largo=prompt("Ingrese el largo correspondiente");
    }

    alert("El perimetro es de " + (ancho*2 + largo*2) + " metros");
}
