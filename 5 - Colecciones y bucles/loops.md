# Bucles

>En este apartado vamos a ver los loops genéricos que nos ofrece JavaScript, con genéricos nos referimos a que son funcionalidades que no pertenecen concretamente a ningún tipo de dato. 

## For
>Vamos a empezar por el bucle for, este bucle ejecuta un bloque de código hasta que la condición que evalúa es falsa. Está compuesto por tres expresiones, la primera qué es la variable que inicializa el bucle, la segunda que es la condición a evaluar y la tercera que es el incremento de la variable inicial.

```javascript
for (let i = 0; i < 10; i+=1) {
  console.log(i);
}
```

## While
>El siguiente bucle a conocer es el while. Este bucle ejecuta un bloque de código mientras la condición sea verdadera.

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

>Cómo podemos ver en el ejemplo el incremento de la variable y lo debemos hacer nosotros dentro del bloque de código.

## Do-While
>El siguiente tipo de bucle que vamos a ver es el do-while, la principal diferencia frente al while es que primero ejecuta el bloque de código y luego la condición a evaluar.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10)
```

>Ahora vamos a ver dos tipos de bucles que nos permiten acceder a los atributos de una colección directamente.  Ambos fueron incluidos en la última especificación de JavaScript, ES6.

## For...in

>Este bucle se compone por dos partes, la primera parte es la variable que en el caso de los arrays, nos indica el índice del elemento que se está recorriendo y en el caso de los objetos, nos indica la propiedad del elemento que se está recogiendo. La segunda parte es el elemento a recorrer.

```javascript
const cars = ["Ferrari", "Audi", "Mercedes"];
for (let index in cars) {
  console.log(cars[index]);
}

const car = {
  brand: "Audi",
  model: "A3",
  cv: 190
}
for (let property in car) {
  console.log(`${property}: ${car[property]}`)
}
```

## For...of

>Este bucle por el contrario también se compone de dos partes pero la primera parte nos da directamente el elemento sobre el que se está iterando.
```javascript
const cars = ["Ferrari", "Audi", "Mercedes"];
for (let car of cars) {
  console.log(car);
}
```

>Algo muy importante es que este bucle solo funciona con colecciones iterables por ejemplo no funciona con objetos. Tipos iterables: Arrays and TypedArrays, Strings, Maps, Sets, arguments, DOM elements.

## Break y continue.

>__Break__ y __continue__ son dos palabras reservadas del lenguaje que nos permiten lo siguiente... Break, por un lado, nos permite salir del bucle en cualquier momento, es decir, finalizarlo. Por otro lado, continue nos permite saltar la iteración que se esté llevando a cabo en ese momento.

```javascript
for (let i = 0; i < 10; i+=1) {
  if (i === 5)
    break;
  else
    console.log(i);
}
```
```javascript
for (let i = 0; i < 10; i+=1) {
  if (i === 5)
    continue;
  else
    console.log(i);
}
```

## Label

> De la siguiente forma podemos asignarle una etiqueta a cada bucle para utilizar de forma más eficiente break y continue.

```javascript
let i, j;

loop1:
for (i = 0; i < 3; i++) { 
  loop2:
  for (j = 0; j < 3; j++) { 
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log('i = ' + i + ', j = ' + j);
   }
}
```

>

### Ejercicios.

> 1 - Recorrer el siguiente mapa usando el bucle mas apropiado. ¿Qué técnica implicita debemos usar?

```javascript
let car = new Map([['Brand', 'Audi'], ['Model', 'A3'], ['cv', 190]]);
```

> 2 - Crear un tipo de dato llamado Mes. Sus atributos serán nombre y un atributo booleano para saber si el mes es de 30 o 31 días. Debe tener un método "print" que liste todos los días del mes de la siguiente forma: Lunes => 1, Martes => 2, ... Lunes => 8, Martes => 9... Pista: hay que usar el operador módulo (%). 

> 3 - Comprobar si una butaca está vacía. (Ejercicio cine).

> 4 - Crear un programa para la gestión de una plantilla de un equipo de baloncesto. Para ello se deberán crear las clases Equipo, Plantilla y Jugador. 
La clase equipo deberá estar compuesta por: 
>-	Nombre.
>-	Plantilla.
>
>La clase Jugador deberá estar compuesta por:
>-	Nombre.
>-	Apellido.
>-	Edad.
>-	Altura.
>
>La clase Plantilla deberá estar compuesta por:
>-	Quinteto inicial.
>-	Banquillo.
>
>* El quinteto inicial debe tener exactamente cinco jugadores. 
>* El banquillo debe tener como mínimo 3 jugadores y como máximo 8.
>
>La clase Plantilla debe tener un método para imprimir los jugadores del quintento inicial, devolverá un error si no hay suficientes jugadores.
>
>La clase Plantilla debe tener un método para imprimir los jugadores del banquillo, devolverá un error si no hay suficientes jugadores.
>
>La clase Equipo debe tener un método para imprimir todos los jugadores del equipo, antes de imprimir se debe de hacer una comprobación de que no haya ningún jugador titular en el banquillo y viceversa.
>
>* Todas las impresiones por consola deben devolver tan sólo el nombre y el apellido.
