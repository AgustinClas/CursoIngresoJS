function mostrar()
{
    var numero1 = prompt("Ingrese el primer numero");
    var numero2 = prompt("Ingrese el segundo numero");

    numero1=parseInt(numero1);
    numero2=parseInt(numero2);

    while(isNaN(numero1)){
        numero1 = prompt("Ingrese nuevamente el primer numero");
    }
    while(isNaN(numero2)){
        numero2 = prompt("Ingrese nuevamente el primer numero");
    }

    if(numero1==numero2){
        alert("Los numeros ingresados son " + numero1 + " " + numero2);
    }else {
        
        if(numero1>numero2){
            alert("La resta de estos numeros es " +(numero1-numero2));
        }else{
            var suma=numero1+numero2;
            alert("La suma de estos numeros es " + suma);
        }
        if(suma>10){
            alert("La suma es "+suma+" y superó a 10");
        }
    }
    
}
