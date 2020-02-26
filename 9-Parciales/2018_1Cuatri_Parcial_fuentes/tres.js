function mostrar()
{
    var precio=prompt("Ingrese el precio");
    var descuento=prompt("Ingrese el porcentaje de descuento");

    precio=parseInt(precio);
    descuento=parseInt(descuento);

    while(isNaN(precio)||precio<0){
        precio = prompt("Ingrese el precio");
    }
    while(isNaN(descuento)||descuento<0 ||descuento>100){
        descuento = prompt("Ingrese el porcentaje de descuento");
    }
    document.getElementById("elPrecioFinal").value=(100 - descuento) * precio / 100;
}
