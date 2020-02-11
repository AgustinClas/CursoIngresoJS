function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById("edad").value;

    if(edad <= 17){
        if(edad >=13){

            alert("Usted es un adolescente")

        
        } else {

            alert("Usted es un niño")
        }
    }  else {

        alert("Usted es mayor de edad")
    }

}//FIN DE LA FUNCIÓN