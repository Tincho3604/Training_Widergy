# Training-JS

These are different exercises to practice JavaScript!

After elbowing your solution, run the command `yarn test [exercise number]` (for example: `yarn test 1`), to run the tests and know if your solution gives a correct result !.

# Statements

## Exercise 1: Arrays 101

### sum: (array [num]) => num

Calculate the sum of the elements of the array. For example if the array is [1, 3, 6, 9] the function returns 19.

### reverse: (array [X]) => array [X]

Returns the reverse. For example if the array is [1, 2, 3] it returns [3, 2, 1].

### rotations: (array [X], num) => array [X]

We define rotation as the shift of the numbers in an array to the left. For example, if our array is: [1, 2, 3, 4, 5] and we want to rotate it 2 times, the result is: [3, 4, 5, 1, 2].

### plateauMasLarga: (array [X]) => num

We define plateau as the sequence of consecutive equal values. The idea of ​​this function is to return the longest plateau. For example, if our array is: [1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 5, 5, 3] the expected result is 5.

---

## Exercise 2: Functions, Loops and Arrays

### f1: (array [num]) => array [num]

Where each element of the returned array contains half of each element of the input array.

### f2: (array [num], func) => array [num]

Where each element of the returned array is the corresponding element of the input array to which the function received by parameter was applied.

### f3: (array [num], num) => array [num]

Where the returned array contains only the numbers greater than the number received by parameter.

### f4: (array [num], func) => array [num]

Where the returned array contains only the numbers that fulfill the function received by parameter, that is, they return true if we apply this function to them.

### f5: (array [num], num) => num

Where the number returned is the first that is less than the number received by parameter, in case of not finding it, it returns -1.

### f6: (array [num], func) => num

Where the number returned is the first one that fulfills the function returned by parameter.

---

## Ejercicio 3: Arrays multidimensionales

### máximo: (array[array[num]]) => num

Devuelve el valor máximo de la matriz.

### multiplicarMatrices: (array[array[num]], array[array[num]]) => array[array[num]]

Devuelve la multiplicación de las matrices. Supongan que siempre reciben matrices con las dimensiones correctas para multiplicarse. (https://www.mathsisfun.com/algebra/matrix-multiplying.html).

### esDegrade: (array[array[num]]) => bool

Devuelve true si la matriz es un degrade.
Definimos degrade de la siguiente manera: Una matriz donde todas las celdas de la diagonal tienen el mismo valor y los números a la derecha son más chicos y a la izquierda más grande.
Por ejemplo: La siguiente matriz es un degrade:
[[4, 6, 8, 19]
[2, 4, 9, 40]
[1, 2, 4, 10]
[-2,0, 2, 4 ]]
La matriz vacia es considerada un degrade.

### esDamero: (Tablero) => bool

Definimos Tablero como la matriz de 1 y 0 (array[array[num]]). El tablero vacio no es damero.
Esta función evuelve true si el tablero de entrada es un tablero alternado de celdas negras y blancas.

### esDameroRegular (Tablero) => bool

Devuelve true si el tablero de entrada es un tablero damero y es una matriz cuadrada (El alto de la matriz es igual al largo).

---

## Ejercicio 4: Arrays y html

Todos los htmls de este codigo los pueden devolver como strings pelados.
Un usuario quiere poder ver sus facturas, una factura se representa por un codigo que puede tener letras y numeros (un string) y por un valor que representa cuanto se debe pagar en el perido de la factura.

## ¿Como representarias una factura?

### ¿Como visualizarias una factura con html?

Es razonable esperar que el usuario tenga mas de una factura para visualizar, pero este es un número que no sabemos.

### ¿Como harias para visualizar todas las facturas?


Luego de implementar esta vista los chicos de funcional se dieron cuenta que faltaban algunos datos y nos pidieron que implementemos un par de funciones adicionales.
Lo primero que quieren que agregemos es una calculadora de interes,
para esto debemos mostrar ademas del valor y el codigo de cada factura cuanto sera su valor en caso de no ser pagada antes del vencimiento. El cliente definio que el interes agregado sera de 3,5%.

Ademas quieren que agregemos una funcionalidad que le indique al usuario cuantas facturas puede pagar dada una cantidad determinada de dinero.
Por ejemplo si tenemos dos facturas que adeudan $600 y una $100 y solo contamos con \$700 las unicas facturas que podremos pagar son la segunda y una de las dos primeras (Es indiferente cual).

Las chicas de diseño todavia no definieron como se vera esta ultima funcionalidad asi que por ahora solo debemos agregar la logica.

---

## Ejercicio 5: Strings

### capitalizar: (string) => string

Capitaliza todas las palabras del string. Por ejemplo si el string es 'hola mundo widergy' el resultado deberia ser 'Hola Mundo Widergy'.

### inverso: (string) => string

Devuelve el inverso de la frase (Las palabras estan separadas por un ' '). Por ejemplo para 'Hola Mundo Widergy' su inverso seria: 'Widergy Mundo Hola'.

### sanitizar: (string, string) => string

Sanitiza en el primer string todas las apariciones del segundo. Por ejemplo si recibimos 'Este es un ejercicio de prueba' y 'prueba' el resultado seria: 'Ese es un ejercicio de ######' (Pueden suponer que el segundo string nunca es vacio).

### contarArrays: (array[string], array[string]) => array[num]

Cuenta la aparicion de los strings del segundo array en el primero.
Por ejemplo si recibimos ['aba', 'baba', 'aba', 'xzxb'] y ['aba', 'ab', 'xzxb'] entonces debemos devolver [2, 0, 1] ya que 'aba' aparece dos veces, 'ab' ninguna y 'xzxb' una. (Pueden suponer que el segundo array nunca esta vacio).

### esSubsecuencia: (string, string) => bool

Devuelve true si el segundo string es subsecuencia del primero (Pueden suponer que el segundo string no es vacio)

---

## Ejercicio 6: Objetos 101

### listar: (Object) => string

Lista un objeto como un string. Por ejemplo para {a: 1, b: 2} el resultado de listar seria 'a: 1, b: 2'

### invertir: (Object) => Object

Devuelve un objeto cuyas keys sean los valores y viceversa.

### ordenarPorId (array[Object]) => array[Object]

Dado un array de objetos que tengan un atributo numerico "id" ordenar el array según el mismo (Pueden asumir que no se repiten los ids si les es más facil).

### Una utility quiere agregar un nuevo menu a su oficina virtual. Este menu contara con una cantidad determinada de subOpciones (Que tienen la misma estructura que una Opcion), un titulo y una funcion que ejecuta cuando es seleccionado.

Desarrollar una función que imprima (en la consola) el menu de forma que se pueda visualizar todo el arbol de opciones (Pudiendo discernir que opcion es hijo de cual y a que nivel pertenece)

### Usando el menu definido en el punto anterior: Se agrego a cada opcion un flag que indique si el usuario puede visualizar esa opcion. Desarrollar una función que devuelva la primera opción visible (Esta seria la primer hoja donde todos sus padres son visibles, en un arbol donde todos los nodos son visibles seria la hoja más a la izquierda).
