import { test_ejercicio5 } from "./tests.js";

// Ejercicio 5
const capitalizar = (s) => {
  if(s === "") return ""
  return s.split(' ').map(letra => letra[0].toUpperCase() + letra.substr(1)).join(' ')  
};


const inverso = (s) => {
  const arr1 =  s.split(" ")
  let arr2 = []
  for(let i=arr1.length-1; i>=0; i--)
  arr2.push(arr1[i])

return arr2.join(" ")
};



const sanitizar = (s, c) => {

  let arr = s.split(" ")
  let arr2 = c.split("")
  let arr3 = []
   
  for(let i=0; i<arr2.length; i++){
     arr3.push("#")
  }

  for(let i=0; i<arr.length;i++){
      if(arr[i] === c){
         arr[i] = arr3.join("")
      }
  }
  
  return arr.join(" ");
};



const contarArrays = (s, c) => { 
  let arr = []
  
  
  for(let i=0;i<c.length;i++){
        arr.push(s.filter(e => e === c[i]))
        arr[i] = arr[i].length
    }
      return arr
  };



  const esSubSecuencia = (s1, s2) => {
    let arr1 = s1.split("")
    let arr2 = s2.split("")
    let arr = []
    
     for(let i=0; i<arr2.length; i++){
    arr.push(arr1.indexOf(arr2[i]))
  }
     
     if(arr[0] < arr[1])
       return true
     else
      return false
  };




test_ejercicio5(capitalizar, inverso, sanitizar, contarArrays, esSubSecuencia);
