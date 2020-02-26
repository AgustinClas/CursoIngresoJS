function mostrar()
{
    var planeta=prompt("Ingrese un planeta")

    switch(planeta){
        case "tierra":
            alert("Aca vivimos!");
            break;
        case "mercurio":
        case "venus":
            alert("Aca hace mas calor");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert("Aca hace mas frio");
            break;
        default:
            alert("Usted no ingreso un planeta");
    }
}
