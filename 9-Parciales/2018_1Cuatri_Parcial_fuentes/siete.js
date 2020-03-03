function mostrar()
{   
    var acumuladorNota = 0;
    var promedioNotas;
    var sexo;
    var alumnos = 0;
    var nota;
    var notaMin = 11;
    var sexoMin;
    var contadorVarones=0;

    while(alumnos < 5){
       nota = prompt("Ingrese una nota del 0 al 10");
       sexo = prompt("Ingrese el sexo");
       nota = parseInt(nota);

        while(nota<0 || nota>10 || isNaN(nota)){
            nota = prompt("Ingrese una nota correspondiente");
        }
        while(sexo != "f" && sexo != "m"){
            sexo = prompt("Ingrese un sexo correspondinte");
        }

       acumuladorNota = acumuladorNota + nota;

        if(notaMin > nota){
            notaMin = nota;
            sexoMin = sexo;
        }

        if(nota>5 && sexo == "m"){
            contadorVarones++;
        }
       alumnos++;
        
    }
    promedioNotas = acumuladorNota / alumnos;
    alert("Nota promedio " + promedioNotas);
    alert("La nota mas baja fue " + notaMin + " y el sexo es " + sexoMin);
    alert(contadorVarones + " varones aprobados");
}
