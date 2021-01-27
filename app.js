$(document).ready(function(){
    let suma = 0;
    let sumaPrecio = 0;
    let sumaPrecioTotal = 0;
    
    $("#mas").click(function () {
        //saco el valor accediendo a un input de tipo text y name = nombre
        
        let desc = ($('#descripcion').val());
        $("#colocarDesc").append("<p>" + desc + "</p>");
        
        let cant = ($('#cantidad').val());
        $("#colocarCant").append("<p>" + cant + "</p>");
        
        let precio = ($('#precio').val());
        $("#colocarPrecio").append("<p>" + precio + "</p>");
        
        let mult = "<p>" + cant * precio + "</p>";
        let multi = cant * precio;
        
        $("#totalidad").append(mult);
        
        //Suma las cantidades
        let cantidad = [];
        cantidad.push(cant);
        for(var i = 0; i < cantidad.length; i++){
            //Añado el valor que contienen los campos
            suma = parseInt(suma) + parseInt(cantidad[i]);
        }
        $("#totalCant").html(suma); 

        //Suma el precio Unitario
        let cantidadPrecio = [];
        cantidadPrecio.push(precio);
        for(var i = 0; i < cantidadPrecio.length; i++){
            //Añado el valor que contienen los campos
            sumaPrecio = parseInt(sumaPrecio) + parseInt(cantidadPrecio[i]);
        }
        $("#precioUnitario").html(sumaPrecio); 

        //Suma el precio total
        let total = [];
        total.push(multi);
        for(var i = 0; i < total.length; i++){
            //Añado el valor que contienen los campos
            sumaPrecioTotal = parseInt(sumaPrecioTotal) + parseInt(total[i]);
        }
        $("#totalPrecio").html(sumaPrecioTotal); 

    });
});








// console.log(suma)

// let suma = 0;
// $('#cantidad').each(function(){
    //     suma += parseInt($(this).val());
    
    //     // let valor = $(this).val();
    //     // suma = suma + parseInt(valor);
    //     console.log(suma)
    // });
    // $("#totalCant").val(suma); 