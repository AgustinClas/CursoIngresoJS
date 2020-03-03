function mostrar()
{
    var marca;
    var temperatura;
    var temperaturaPares=0;
    var contadorTemperatura=0;
    var peso;
    var promedioPeso;
    var acumuladorPeso=0;
    var contadorProductos=0;
    var marcaPesado;
    var pesoMax=0;
    var pesoMin=101;
    var respuesta = true;

    while(respuesta){
        marca = prompt("Ingrese la marca del producto");
        temperatura = prompt("Ingrese la temperatura del producto");
        peso = prompt("Ingrese el peso del producto");
        temperatura = parseInt(temperatura);
        peso = parseInt(peso);

        while(isNaN(peso)||peso>100||peso<1){
            peso = prompt("Error= ingrese el peso del producto");
            peso = parseInt(peso);
        }
        while(isNaN(temperatura)||temperatura>30||temperatura<(-30)){
            temperatura = prompt("Error: ingrese la temperatura del producto");
            temperatura = parseInt(temperatura);
        }

        if(temperatura%2==0){
            temperaturaPares++;
        }
        if(pesoMax<peso){
            marcaPesado = marca;
            pesoMax=peso;
        }
        if(pesoMin>peso){
            pesoMin=peso;
        }
        if(temperatura<0){
            contadorTemperatura++;
        }
        acumuladorPeso = acumuladorPeso + peso;
        contadorProductos++;
        promedioPeso = acumuladorPeso / contadorProductos
        respuesta = confirm("Continuar?");
    }
    document.write("Temperatutas pares: " + temperaturaPares + "<br>");
    document.write("marca del producto más pesado" + marcaPesado + "<br>");
    document.write("temperatura menor a 0 grados "+ contadorTemperatura + "<br>");
    document.write("Peso promedio " + promedioPeso + "<br>");
    document.write("Peso maximo " + pesoMax + "<br>");
    document.write("Peso minimo " + pesoMin);
}
//COMPROBAR