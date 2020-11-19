// Ejercicio 4:
// No nos olvidamos de nada, este ejercicio te dejamos que definas todo vos XD

//ESta funcion calcula el Recargo del total de la factura

const calcularRecargo = (t) => {
    let interes   
    interes = (t * 3.5) / 100
    
    return Math.round(interes) 
}


// Variables GLOABLES
const tabla = document.getElementById("data")
const td = document.createElement("td")
var totales = []
const facturas = [
    {"codigo":"GHDD1", "total":700,"Recargo":""},
    {"codigo":"JKLS5", "total":600,"Recargo":""},
    {"codigo":"ASDV3", "total":100,"Recargo":""},
    {"codigo":"ASDV3", "total":200,"Recargo":""},
]


// Lo que hago aca es recorrer [Facturas] y llamar a la funcion calcularRecargo asi cargo en mi objeto el total con el recargo  
// Despues cargo eso en un array nuevo y ordeno de manera ascendente

facturas.map(item => {
    item.Recargo = calcularRecargo(item.total) + item.total
    totales.push(item.Recargo)  
    totales.sort(function(a, b) {
        return a - b;
      });
    })
 





// En esta parte decidi hacer estilos basicos con JS para practicar manejo del DOM
document.getElementById("inputs").style.display = "flex"
document.getElementById("inputs").style.flexDirection = "column"
document.getElementById("inputs").style.width = "50vh"
document.getElementById("data").style.marginBottom = "25px"






// Lo que hago en "cuotas()" es renderizar de manera dinamica los valores totales+recargo = "Recargo" en el select 

const cuotas = (e) => {

    let value = document.getElementById("pay").value
    
    for(let valor of calcularCuotas(value)){
    document.getElementById("options").innerHTML +=  `
    <option>Pago ${valor} $</option>  
    `}    
   } 
   

// En esta funcion analizo si el valor que ingresa el usuario es mayor o menor a el valor de las determinadas facturas
// Me devuelve un array con los valores dentro del rango posible con las facturas posibles a pagar
const calcularCuotas = (v) => {
    const cuotas = []
    if(v < totales[0]){
        return alert("El monto ingresado es insuficiente")
    }

    totales.map(num => {
         if(v >= num){
         cuotas.push(num)
        }
    })
    
 
    return cuotas
} 




// Aca renderizo los datos de mi objeto Facturas y en una tabla

for(let valor of facturas){
    tabla.innerHTML += `
<tr>
    <td>${valor.codigo}</td>
    <td>${valor.total}</td>
    <td>${valor.Recargo}</td>
</tr>

`
}

