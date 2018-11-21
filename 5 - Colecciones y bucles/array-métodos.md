# Arrays - Métodos.

>Hoy vamos a ver algunos métodos importantes, asociados al objeto Array, que nos permiten iterar y filtrar arrays, entre otras cosas.

## ForEach

>Nos devuelve en cada iteración el elemento del array:

```javascript
const arr = ['a', 'b', 'c'];

arr.forEach((element) => {
  console.log(element);
});


// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## Map

>Permite generar un nuevo array, modificado a través una función, callback. En cada iteración del map, el callback recibirá el elemento del array y le aplicará la transformación definida en el callback.

```javascript
const arr = [1, 4, 9, 16];

const mapped = arr.map(x => x * 2);
console.log(mapped);

// expected output: Array [2, 8, 18, 32]
```

## Filter

>Permite generar un nuevo array con los elementos que pasan el filtro definido en el callback.

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

// expected output: Array ["exuberant", "destruction", "present"]

```

## Reduce

>Nos permite trabajar con los elementos de un array de forma acumulativa. Para ello debemos definir un reducer, que podrá recibir tres parámetros: el acumulador, el valor actual, el índice actual y el array.

```javascript
const arr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(arr.reduce(reducer));
// expected output: 10
```

### Ejercicios

1 - En el ejercicio de la plantilla de baloncesto, hacer un método que te devuelva los jugadores mayores de 30 años. Se deberá generar antes un array con todos los jugadores tanto del quintento inicial como del banquillo.

2 - En el ejercicio de la plantilla de baloncesto, hacer un método que te devuelva la media de edad de toda la plantilla. Se deberá generar antes un array con todos los jugadores tanto del quintento inicial como del banquillo.

