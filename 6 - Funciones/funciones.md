# Funciones.

> Ya hemos trabajado con funciones en los temas anteriores, ahora vamos a ver las diferentes formas que hay en javascript de declarar una función.

## Function declaration.

> Es la más clásica y la más extendida, pero seguramente ya no sea la más usada.

```javascript
function sum(a, b) {  
  return a + b;
}
sum(5, 6); 
```

## Function expression.

> Es la más usada actualmente junto a la "arrow function". Nos permite encapsular una función en una variable, o en la propiedad de un objeto. 

```javascript
const sum = function(a, b) {
  return a + b;
};

sum(5, 6); 

const math = {
  sum: function(a, b) {
    return a + b;
  }
};

math.sum(5, 6); 
```

## Shorthand definition.

> Forma introducida en ES6. Nos permite declarar funciones en objetos literales y clases de una manera, como su nombre indida, "short".

```javascript
const math = {
  sum(a, b) {
    return a + b; 
  }
}

math.sum(5, 6); 
```

> La principal ventaja frente a "function expression" es que a parte de ser más legible y más corta, el método shorthand crea funciones nombradas, al contrario de "function expression" que crea funciones anónimas. Para debuggear puede ser más complicado tener funciones anónimas.

## Computed property names and methods.

> Ojo cuidao'... aquí hay que abrir bien los ojos. ES6 nos permite que la propiedad de un objeto sea variable, esto quiere decir lo siguiente: 

```javascript
const diplodocus = "pi";

const math = {
  [diplodocus]: 3.14
}

console.log(math.pi); // 3.14
```

> Esta sintaxis nos permite que la propiedad de un objeto sea la evaluación de una función o una variable. En este primer caso evaluamos una variable, veamos como sería con una función:

```javascript
const diplodocus = function() {
  return "pi"
}

const math = {
  [diplodocus()]: 3.14
}

console.log(math.pi); // 3.14
```

> ¿Bien?, en este ejemplo no tiene mucho sentido usarlo, busquemos un caso más práctico.
>
> Imaginemos que estamos programando el carrito de compra de una tienda online. A la hora de rellenar los datos de envío queremos usar una misma estructura de datos que nos sirva tanto para particulares como para empresas, es decir tanto para DNI, como para CIF. Una solución sería la siguiente: 

```javascript
const typeDocument = function(isParticular) {
  return isParticular ? 'NIF' : 'CIF';
}

const Purchase = function(isParticular, city, address, document) {
  this.shoppingCart = {
    // ....
  }
  this.shippingData = {
    address: address,
    city: city,
    [typeDocument(isParticular)]: document
  }
}

const newPurchase = new Purchase(true, 'Madrid', 'Calle del js', '54023398W');
console.log(newPurchase);
```

> En este caso nos va a generar un shippingData con la propiedad "NIF", si le hubieramos pasado false nos hubiese generado un shippingData con la propiedad "CIF". 

> Por lo que volviendo a las funciones, podemos encapsular una función dentro de una "computed property".

```javascript 
const diplodocus = "pi";

const math = {
  [diplodocus]() {
    return 3.14
  }
}

console.log(math.pi()); // 3.14
```

> Si te duele la cabeza un poco es mejor que hagas un descanso y comas algo con azúcar, que hay que seguir. 

## Arrow function.

> Nuestra gran amiga, otra maravilla de ES6. Nos permite crear funciones anónimas con la siguiente sintaxis, () => {}. La gran ventaja, a parte de lo legible que es cuando lo conoces, es que no genera su propio contexto this. Veamos un ejemplo:

```javascript
const Clock = function() {
  this.message = 'Finish.';
  this.countdown = setTimeout(function() { 
    console.log(this.message)
  }, 3000);
}

const x = new Clock();
x.countdown; // after three seconds... undefined.
```

> El resultado será undefined porque la función del callback del setTimeout genera su propio scope this. Lo podemos solucionar con una arrow function: 

```javascript
const Clock =  function(){
  this.message = 'Finish';
  this.countdown = setTimeout(() => { 
    console.log(this.message)
  }, 3000);
}

const y = new Clock();
y.countdown; // after three seconds... Finish.
```

## Funciones generadoras

> ¿Y tú qué o quién eres? Os preguntaréis...
Un generador es una función que se va ejecutando por pasos y que va devolviendo valores parcialmente. 
>
> Esto lo hace a través de la palabra reservada _yield_, que equivaldría al _return_ de una función normal y corriente. _Yield_ devuelve un objeto con dos atributos, el primero el valor que retornamos en cada _yield_ y el segundo un booleano indicando si la función generadora ha llegado a su fín o no. Para solicitar cada valor debemos hacer uso del método _next_ propio del generador una vez que lo llamemos, veamos un ejemplo: 

```javascript
function *generator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

var gen = generator(1);
console.log(gen.next());
//  Object {value: 2, done: false}
console.log(gen.next());
//  Object {value: 3, done: false}
console.log(gen.next());
//  Object {value: 4, done: false}
console.log(gen.next());
//  Object {value: undefined, done: true}
```

### Ejercicios

> 1 - Crear una librería matemática que realice las siguientes operaciones: suma de dos números, resta de dos números, multiplicación de dos números, división de dos números. 
>
> La librería puede definirse de cualquiera forma, a través de un tipo de dato (prototype), a través de una función, a través de un objeto literal... Por lo que las funciones de la librería habrá que definirlas de la forma más correcta en cada caso. 

> 2 - Añadir a la librería una función generadora que nos devuelva la sucesión de fibonacci. (1,2,3,5,8,13,21...)

> 3 - Añadir a la librería una función que resuelva ecuaciones de segundo grado. La función devolverá un array, ya sea vacío si la ecuación no tiene solución ó con una o dos soluciones.

> 4 - Añadirle a la librería una caché para obtener de manera más rapida los resultados de una ecuación de segundo grado. 