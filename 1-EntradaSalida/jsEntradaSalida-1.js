//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{

    var nombre;
    var edad;
    var sexo;
    var pasaje;
    var sexoMayor;
    var pasajeMayor;
    var nombreJoven;
    var respuesta=true;
    var edadMin;
    var edadMax=isNaN;
    var contadorMujeres=0;
    var cantidadMujeres=0;
    var edadAcumuladaM=0;
    var edadPromedioM=0;
    var cantidadHombres=0;
    var edadAcumuladaH=0;
    var edadPromedioH;

    while(respuesta){
        nombre = prompt("Ingrese su nombre");
        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);
        sexo = prompt("Ingrese el sexo");
        pasaje = prompt("Ingrese pasaje (urbano, nacional o internacional)");

        while(isNaN(edad)||edad<18){
            edad = prompt("Ingrese una edad adecuada");
        }
        while(sexo!="m"&sexo!="f"){
            sexo = prompt("Ingrese un sexo correcto");
        }
        while(pasaje!="urbano"&&pasaje!="nacional"&&pasaje!="internacional"){
            pasaje = prompt("Error= Ingrese si el pasaje es urbano, nacional o internacional");
        }

        if(pasaje=="nacional" && sexo=="m"){
            if(isNaN(edadMin)){
                edadMin = edad;
                nombreJoven=nombre;
            }else if(edadMin>edad){
                edadMin = edad;
                nombreJoven=nombre;
            }
        }
        if(isNaN(edadMax)){
            pasajeMayor=pasaje;
			sexoMayor=sexo;
			edadMax=edad;
        }else if(edadMax<edad) {
			pasajeMayor=pasaje;
			sexoMayor=sexo;
			edadMax=edad;
		}
        if(sexo=="f"&&(pasaje=="urbano"||pasaje=="nacional")){
            contadorMujeres++;
        }
        if(sexo=="f"){
            cantidadMujeres++;
            edadAcumuladaM= edadAcumuladaM+edad;
        }
        if(sexo=="m"&&pasaje=="internacional"){
            cantidadHombres++;
            edadAcumuladaH=edadAcumuladaH+edad;
        }
		respuesta=confirm("Continuar");
	}
	
    if(cantidadHombres==0){
		edadPromedioH=0;
	}else{
		edadPromedioH=edadAcumuladaH/cantidadHombres;
	}
	if(cantidadMujeres==0){
		edadPromedioM=0;
	}else{
		edadPromedioM=edadAcumuladaM/cantidadMujeres;
	}
    document.write("nombre del hombre con pasaje nacional más joven " + nombreJoven + "<br>");
    document.write("pasajero/a más viejo: pasaje: " + pasajeMayor + " y sexo " + sexoMayor  + "<br>");
    document.write("cantidad de mujeres con pasaje urbano o nacional: " + contadorMujeres + "<br>");
    document.write(" promedio de edad entre las mujeres: " + edadPromedioM + "<br>");
    document.write("promedio de edad entre los hombres con pasaje internacional: " + edadPromedioH);
}

