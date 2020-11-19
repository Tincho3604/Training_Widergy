// Despues de tanto video es probable que estes con ganas de programar un poco. La idea es que ahora ejercites un poco los conceptos que estuviste viendo.
// Para estos ejercicios tuvimos en cuenta aquellas cosas con las que te podes llegar a encontrar con regularidad.
// Acordate de consultar cualquier dud :)

import { test_ejercicio1 } from "./tests.js";

// Podes probar estos ejercicios con la consola
// Para mostrar algo en la consola usamos la función: console.log().

// Podes declarar y usar todas las funciones auxiliares que quieras.
// Podes (y te recomiendo) renombrar las letiables (y algunas funciones) de entradas a cosas más declarativas ;)

// Ejercicio 1:
const sumatoria = (a) => {
  let suma = 0 
  
  for(let i=0; i<a.length; i++){
    suma += a[i]
  }

  return suma;
};

console.log("Ejercicio 1 --> ",sumatoria([2,2,2,2]))


console.log("\n")


const reverso = (a) => {
  let arrNew = []

   for(let i = a.length-1 ; i>=0; i--){
           arrNew.push(a[i])      
  } 

  return arrNew;
};

console.log("Ejercicio 2 --> ",reverso([1,2,2,3,4]))
console.log("Ejercicio 2 --> ",reverso(['a','b','c']))

console.log("\n")


const rotaciones = (a, n) => {
  let arrNew = [] 
  
  for(let i=n; i<a.length; i++){
    arrNew.push(a[i])
  }

  for(let i=0; i<n; i++){
    arrNew.push(a[i])
  }
  
  return arrNew
}

console.log("\n")

console.log("Ejercicio 3 --> ",rotaciones([1,2,3,4,5], 2))
console.log("Ejercicio 3 --> ",rotaciones([1, 2, 3], 3))
console.log("Ejercicio 3 --> ",rotaciones(['a','b','c','d'], 1))


console.log("\n")


const mesetaMasLarga = (a) => {
  let cont = 1
  let arr = []

  for(let i=0; i<a.length; i++){
     if(a[i] === a[i+1]){           
       cont++
    
     }else{

   arr.push(cont)
   cont = 1
  }
 }

  for(let i=0; i<arr.length; i++){
    if(arr[i] > arr[i+1])
    return arr[i]       
    } 
  };
  

 console.log("Ejercicio 4 --> ",mesetaMasLarga([1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 5, 5, 3])) 



console.log("\n\n")
test_ejercicio1(sumatoria, reverso, mesetaMasLarga, rotaciones);
