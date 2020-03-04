function mostrar()
{
    var numero;
    var letra;
    var respuesta=true;
    var contadorPares=0;
    var contadorImpares=0;
    var contadorCeros=0;
    var contadorPositivos=0;
    var acumuladorPositivos=0;
    var promedioPositivos;
    var acumuladorNegativos=0;
    var numeroMax;
    var letraMax;
    var numeroMin;
    var letraMin;

    while(respuesta){
        numero=prompt("Ingrese un numero entre -100 y 100");
        numero=parseInt(numero);
        letra=prompt("Ingrese una letra");


        while(isNaN(numero)||numero>100||numero<(-100)){
            numero=prompt("Error: Ingrese un numero entre -100 y 100");
        }
        while(!isNaN(letra)){
            letra=prompt("Error: Ingrese una letra");
        }
        if(numero==0){
            contadorCeros++;
        }else {
            if(numero%2==0){
                contadorPares++;
            }else{
                contadorImpares++;
            }
        }
        if(numero>0){
            contadorPositivos++;
            acumuladorPositivos=acumuladorPositivos+numero;
        }else if(numero<0){
            acumuladorNegativos=acumuladorNegativos+(numero);
        }
        if(isNaN(numeroMax)){
            numeroMax=numero;
            letraMax=letra;
        }else if (numeroMax<numero) {
            numeroMax=numero;
            letraMax=letra;
        }
        if(isNaN(numeroMin)){
            numeroMin=numero;
            letraMin=letra;
        }else if(numeroMin>numero){
            numeroMin=numero;
            letraMin=letraMin;
        }
        respuesta=confirm("Desea continuar?");
    }

    if(contadorPositivos==0){
        promedioPositivos=0;
    }else{
        promedioPositivos=acumuladorPositivos/contadorPositivos;
    }

    document.write("Cantidad de numeros pares: " + contadorPares + "<br>");
    document.write("Cantidad de numeros impares: " + contadorImpares + "<br>");
    document.write("cantidad de ceros: " + contadorCeros + "<br>");
    document.write("Promedio de positivos: " + promedioPositivos + "<br>");
    document.write("Suma de numeros negativos: " + acumuladorNegativos + "<br>");
    document.write("Numero maximo y letra: " + numeroMax + " " + letraMax + "<br>");
    document.write("Numero minimo y letra: " + numeroMin + " " + letraMin);
}
