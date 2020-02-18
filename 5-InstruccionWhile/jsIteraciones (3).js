function mostrar()
{

var clave = prompt("ingrese el número clave.");
contador = 0

while(clave != "utn750"){
    contador++;

    if (contador == 3){
        break;
    }

    clave = prompt("Error. ingrese la clave nuevamente");
}
if (clave == "utn750"){
    alert("Bienvenido!")
}else {
    alert("Maximo de intentos alcanzados")
}

}//FIN DE LA FUNCIÓN
