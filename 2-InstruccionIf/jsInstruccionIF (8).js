function mostrar()
{
//tomo la edad  
    var edad;
    var estadoCivil;

    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;
    
    if(edad>=18 && estadoCivil == "Soltero") {

        alert("Usted no es menor y esta soltero")
    }


}//FIN DE LA FUNCIÓN