import { test_ejercicio2 } from "./tests.js";
import {faux1 , faux2, faux3} from './aux.js'
// Ejercicio 2:
const f1 = (a) => {
  let arrNew = []
  let resto
  for(let i=0; i<a.length; i++){
        resto =  a[i] / 2 
          arrNew.push(Math.floor(resto))
      }  
  return arrNew;
};








// Para probar esta funcion podes usar faux1 y faux2 definidas en Aux.js
const f2 = (a, func) => {
  let arrNew = []
  
  for(let i=0; i<a.length; i++){
          arrNew.push(func(a[i]))
  }

  return arrNew;
};



const f3 = (a, n) => {
 let arrNew = []
  for(let i=0; i<a.length; i++){
      if(a[i] > n){
          arrNew.push(a[i])   
      }
    }
  return arrNew
  }
   




// Para probar esta funcion podes usar faux3 definida en Aux.js
const f4 = (a, func) => {
  let arr = []
  let flag

  for(let i=0; i<a.length; i++){
    flag = func(a[i])
    if(flag){
    arr.push(a[i])
     } 
  }  
return arr
};



/* En este enunciado la respuesta que aparece en el test.js esta mal ahi la cambie*/
const f5 = (a, n) => {
  let valor 
  valor = a.find(num => {
  return num < n
})

  if(typeof valor === "undefined"){
  
    return -1
  
  }else{
 
    return valor
  }
}




// Para probar esta funcion podes usar faux3 definida en Aux.js

const f6 = (a, func) => {
  let flag

  for(let i=0; i<a.length; i++){
    flag = func(a[i])
    if(flag){
    return a[i]
     } 
  }  
return -1
};







test_ejercicio2(f1, f2, f3, f4, f5, f6);
