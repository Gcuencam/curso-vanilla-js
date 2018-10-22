# Condicionales

>Lo primero que vamos a ver en este tema es qué diferencias hay entre las estructuras de datos de tipo Object, Array, Map, y Set. Todas estas estructuras son colecciones, llamamos colecciones a las estructuras de datos que contienen un conjunto de datos que tienen una relación entre sí.

### Array y Object.

```javascript
let teamA = ['Messi', 'Suárez', 'Dembelé', 3];

let teamO = {
  10: 'Messi',
  9: 'Suárez',
  11: 'Dembelé',
  numberOfPlayers: 3
}
```

>En este ejemplo vemos como tanto el array como el objeto nos permite meter datos de distinto tipo, por un lado tenemos los nombres de los jugadores y al final tenemos el número de jugadores, por lo que estamos metiendo strings y numbers. 

>La principal diferencia, viéndolo desde el punto de vista de las colecciones, es que los arrays solo nos permiten guardar valores únicos, en cambio los objetos nos permiten guardar valores de clave valor, por lo que podemos guardar más información, en este caso aprovechamos la clave para guardar el dorsal del jugador.

### Set y Map.

```javascript
let teamS = new Set(['Messi', 'Suarez', 'Dembelé', 3]);

let teamM = new Map([[10, 'Messi'], [9, 'Suárez'], [11, 'Dembelé'], ['numberOfPlayers', 3]]);
```

>Cómo vemos hay bastante parecido entre un array y un set y un objeto y un map. La principal diferencia entre un array y un set es que un set no te permite introducir valores que ya estén en la colección. Y la principal diferencia entre un map y un objeto es que el objeto solo te permite introducir como claves valores de tipos numéricos o strings, el map por el contrario te permite que las claves sean de cualquier tipo. 

>Los Map se utilizan con una sencilla interfaz donde los principales métodos son:

```javascript
set(key, value) // añadir una nueva pareja clave-valor
get(key) // obtener el valor asociado a una clave
delete(key) //  borrar una pareja clave-valor por medio de la clave.
has(key)// comprobar si hay una determinada clave en el mapa.
```

>Igual que en el caso anterior, los Set se utilizan con una sencilla interfaz donde los principales métodos son:

```javascript
add(value) // añadir una nueva pareja clave-valor
delete(value) // borrar una valor.
has(value) // comprobar si existe un determinado valor.
```

## Ejercicios

> 1 - Teniendo el siguiente código obtener el nombre de los tres primeros jugadores usando destructuring. 

```javascript
let teamS = new Set(['Messi', 'Suarez', 'Dembelé', 3]);
```

> 2 - Crear los tipos de datos necesarios para la gestión de reservas de un cine. Habrá que crear el tipo persona, tipo butaca y tipo sala. El tipo persona estará compuesto por nombre y apellido. El tipo butaca estará compuesto por un número. Finalmente el tipo sala estará compuesto por el número de la sala, una colección de butacas y una asociación de butaca-persona que contendrá todas las reservas. El tipo sala deberá tener 3 métodos, añadir reserva, eliminar reserva y comprobar si una butaca está ocupada.