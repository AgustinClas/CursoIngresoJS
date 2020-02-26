/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
    var numero;
   
function NumerosPares () 
{
    var numerosPares;
    numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    if(0>numero){
        alert("Ingrese un numero positivo");
    }

    numerosPares = numero / 2;
    numerosPares = parseInt(numerosPares);
    alert("Desde el numero ingresado hasta el cero hay " + numerosPares + " numeros pares")
}
function NumerosImpares ()
{
    var numerosImpares;
    numero = document.getElementById("numero").value;
    numero = parseInt(numero);

    if(0>numero){
        alert("Ingrese un numero positivo");
    }

    numerosImpares = numero / 2 ;
    numerosImpares = parseInt(numerosImpares);

    if (numero % 2 != 0){
        numerosImpares = numerosImpares + 1
    }
    alert("Desde el numero ingresado al cero hay " + numerosImpares + " numeros impares");
}
function NumerosDivisibles ()
{
    var numerosDivisibles;
    var divisor;
    divisor = 1;
    numerosDivisibles = 0;

    numero = document.getElementById("numero").value;
    numero = parseInt(numero);

    while(numero >= divisor){
        if (numero % divisor == 0){
            numerosDivisibles++;
        }
        divisor++;
    }

    alert(numero + " tiene " + numerosDivisibles + " numeros divisbles");
}
function VerificarPrimo ()
{
    var numerosDivisibles;
    var divisor;
    divisor = 1;
    numerosDivisibles = 0;

    numero = document.getElementById("numero").value;
    numero = parseInt(numero);

    while(numero >= divisor){
        if (numero % divisor == 0){
            numerosDivisibles++;
        }
        divisor++;
    }
    if (numerosDivisibles == 2){
        alert("El numero es primo");
    }else {
        alert("El numero no es primo");
    }
}
function NumerosPrimos ()
{
    var contadorPrimos = 0;
    var contador = 0;
    
    numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    
    while(numero >= contador){
        var divisor = 0;
        var contadorDivisores = 0;
        while(divisor<=contador){
            if(contador%divisor==0){
                contadorDivisores++;
            }
            divisor++;
        }
        if(contadorDivisores===2){
            contadorPrimos++;
        }
        contador++;
    }
    alert("Desde el numero ingresado al cero hay " + contadorPrimos + " numeros primos");
} 