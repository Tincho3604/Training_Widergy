// Ejercicio 3:
import { test_ejercicio3 } from "./tests.js";

// No te preocupes por la complejidad temporal de estas funciones
const maximo = (M) => {
  let arr = M.flat()
  arr.sort((a,b)=>b-a)
  
  if(typeof arr[0] === "undefined")
    return -1
      else
    return arr[0]
};


const multiplicarMatrices = (M,W) => {
  let arrFinal = [[]]
  let mult
  let cont = 0
  let suma = 0
  let aux = []
  
while(cont < W[0].length){
    for(let i=0; i<M[0].length; i++){         
      mult = M[0][i] * W[i][cont]
       aux.push(mult)
       suma += aux[i]
      }    
     
    arrFinal[0].push(suma)
    cont++
    suma = 0
    aux = []
    }
        return arrFinal
 }



 const esDegrade = (M) => { 
 for(let i = 0; i < M.length; i++ ) {
     for(let j = 0; j < M[i].length; j++) {
         if(M[i][i] !== M[0][0]) return false
         else if(j < i && M[i][i] < M[i][j]) return false
         else if(j > i && M[i][i] > M[i][j]) return false
     }
 }
 return true
 }




 const esDamero = (M) => {
  
  if(M[0].length === 0) return false
  if(M.length === 1) return true
  
    for(let i = 0; i < M.length; i++ ){
      for(let j = 0; j < M[i].length; j++){
        if(M[0][i] === M[1][i])
           return false
         else
           return true
      }
    }
  }


const esDameroRegular = (M) => {
    if((M[0].length === M.length) && (esDamero(M))) return true
     else return false 
  };






test_ejercicio3(
  maximo,
  multiplicarMatrices,
  esDegrade,
  esDamero,
  esDameroRegular
);
