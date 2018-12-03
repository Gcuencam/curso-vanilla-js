# Parámetros.

> 

## Parámetros por defecto.

> Hasta ES6 la única forma de definir un valor por defecto a un parametro de una función era la siguiente: 

```javascript
function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a * b;
}

multiply(8); // 8
multiply(8,2); //16
```

> En ES6 esto se simplifica bastante, veamos el mismo ejemplo: 

```javascript
function multiply(a, b = 1) {
  return a * b;
}

multiply(8); // 8
multiply(8,2); //16
```

> Como vemos, podemos definir el valor por defecto del parámetro en la cabecera de la función.

> Una cosa importante a saber es que el valor por defecto se evalúa en el momento de la llamada, esto nos permite, por ejemplo, hacer lo siguiente: 

```javascript
function getNumberEight() {
  return 8;
}

function multiply(a, b = getNumberEight()) {
  return a * b;
}

multiply(8); // 64
multiply(8,2); //16
```

## "Spread Operator" y "Rest Parameters".

> ES6 añadió un nuevo operador denominado "Spread Operator", es utilizado con la sintaxis _"..."_. 

> Si trabajamos con arrays, su función es agrupar un conjunto de valores en un array de forma "transparente", mejor vemos un ejemplo: 

```javascript 
function classification(first, second, third, ...rest) {
  console.log(first); // Alfredo
  console.log(second); // Helena
  console.log(third); // Sarah
  console.log(rest); // (4) ["Eva", "Gabri", "Aitor", "Carlos"]
}

classification("Alfredo", "Helena", "Sarah", "Eva", "Gabri", "Aitor", "Carlos");
```

> Lo que hemos hecho ha sido agrupar el resto de parámetros, que no nos interesan tanto, pero que por funcionalidad, nos podrían venir bien, se les denomina _"rest parameters"_.

>

> Vamos a aplicarlo con destructuring, visto en temas anteriores: 

```javascript
const classification = ["Alfredo", "Helena", "Sarah", "Eva", "Gabri", "Aitor", "Carlos"];

let [first, second, third, ...rest] = classification;

  console.log(first); // Alfredo
  console.log(second); // Helena
  console.log(third); // Sarah
  console.log(rest); // (4) ["Eva", "Gabri", "Aitor", "Carlos"]
```

> Hemos realizado lo mismo que en el ejemplo anterior, pero de forma distinta. 

> Entre otras cosas, este operador nos permite concatenar arrays de forma muy sencilla:

```javascript
const headlines = ["Alfredo", "Helena", "Sarah"];
const alternates = ["Eva", "Gabri", "Aitor", "Carlos"];

const allTeam = [...headlines, ...alternates];

console.log(allTeam); // (7) ["Alfredo", "Helena", "Sarah", "Eva", "Gabri", "Aitor", "Carlos"]
```

## "Spread Operator" en objetos.

> El _spread operator_ en objetos funciona de manera muy similar a como funciona con arrays. Los dos principales usos que tiene son el de copiar objetos y el de heredar propiedades de un objeto a otro. 

> Veamos como sería hacer la copia de un objeto: 

```javascript
const cat = { age: 4 };
const kitten = cat;
kitten.age = 1;

console.log(kitten.age); // 1
console.log(cat.age); // 1 <-- problem!
```

> Esto sucede porque estamos haciendo una copia por referencia y no por valor, por lo que _cat_ y _kitten_ comparten la misma referencia en memoria.
>
> Usando el spread operator podemos crear un objeto nuevo copiando las propiedades: 

```javascript
const cat = { age: 4 };
const kitten = { ...cat }; // <-- changed
kitten.age = 1;

console.log(kitten.age); // 1
console.log(cat.age); // 4 <-- fixed!
```

> Otro usuo habitual, como hemos dicho anteriormente es la de simular herencia entre objetos literales, veamos un ejemplo: 

```javascript
const animal = { legs: 4 };
const cat = {
    ...animal,
    sound: "meow"
};
const dog = {
    ...animal,
    sound: "woof"
};
console.log(cat); // { legs: 4, sound: "meow" }
console.log(dog); // { legs: 4, sound: "woof" }
```

### Ejercicios.

> 1 - Supongamos que tenemos que desarrollar un programa para una discográfica. La dicográfica se llamará "Somy Music". 
>
> La discográfica estará compuesta por un conjunto de discos. 
> 
> Los discos estarán compuestos por el título, el sello discrográfico, el single y el resto de canciones. Si no se proporciona sello discográfico, se aplicará el sello de la discrográfica, es decir, "Somy Music". 
>
> Realizar una estructura de datos que sostenga este programa y una demo para probarlo. 

