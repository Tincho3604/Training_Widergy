//Ejercicio 6
import { menu1, menu2, menu3, object1 } from "./auxs.js";

const listar = (o) => {
  return JSON.stringify(o);
};


const invertir = (obj) => {
  var keys = Object.keys(obj)
  return keys
}


// Usa los objetos de referencia (object1 y object2).
const ordenarPorId = (a) => {
  a.sort((a, b) => {
    if(a.id < b.id){
      return -1
    }
    if(a.id > b.id){
      return 1
    }
     return 0
  })
  return a;
};



// Usa los menues de referencia (menu1 y menu2)
const imprimirArbol = (menu) => {
  menu.map(item => {
    console.log("\n\n--------------------------------------------------------------\n\n\n")
    console.log(
     item.title ,"\n", 
     item.onSelected,"\n\n",
    )
     item.subOptions.map(item2 => {
      console.log("\n\n") 
      console.log(
       "\t",item2.title,"\n",
          "\t",     item2.onSelected,"\n",
       )
          
              item2.subOptions.map(item3 => {
                    console.log("\n",
                    "\t\t\t",item3.title,"\n",
                     "\t\t\t",item3.onSelected,
                    )
                     item3.subOptions.map(item4 => {
                      console.log("\n",
                           "\t\t\t",item3.title,"\n",
                           "\t\t\t",item3.onSelected,
                      )
                      item4.subOptions.map(item5 => {
                              
                      })
             })
          })
       })
    })
 
 return menu;
};




// Usa el menu de  referencia (menu3)
const imprimirArbol = (menu) => {
  menu.map(item => {
   
    console.log("\n\n--------------------------------------------------------------\n\n\n")
    
    console.log(
     item.visible === false ? "  " : 
     item.title ,"\n", 
     item.visible === false ? " ": 
     item.onSelected,"\n\n",
    
    ) 
   item.visible === false ? " " : 
     

     item.subOptions.map(item2 => {
       item2.visible === false ? "  " : 
      console.log("\n\n") 
      console.log(
    
       "\t",item2.title,"\n",
            item2.visible === false ? "  " : 
          "\t",     item2.onSelected,"\n",
       )
          
              item2.subOptions.map(item3 => {
                    console.log("\n",
                   
                    "\t\t\t",item3.title,"\n",
                     "\t\t\t",item3.onSelected,
                    )
                     item3.subOptions.map(item4 => {
                      console.log("\n",
                           "\t\t\t",item3.title,"\n",
                           "\t\t\t",item3.onSelected,
                      )
                      item4.subOptions.map(item5 => {
                              
                      })
             })
          })
       })
    })
 
 return menu;
};




// Para este ejrcicio no hay tests automaticos :O
