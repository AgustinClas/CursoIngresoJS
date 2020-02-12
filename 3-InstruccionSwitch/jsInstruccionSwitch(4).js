function mostrar()
{
//tomo la edad  
    var mesDelAño 
    mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Febrero":
            
            alert("Este mes tiene 28 dias")

            break;

        case "Abril":
        case "Junio":
        case "Septiembre":
        case "noviembre":    

            alert("Este mes tiene 30 dias")

            break;
    
        default:

            alert("Este mes tiene 31 dias")

            break;
    }

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN