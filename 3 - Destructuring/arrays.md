# Destructuring. 

> El destructuring es una expresión de javascript, introducida en ES6, que nos da una manera de extraer datos de objetos o arrays y asignarlos a variables.
>
> Como es un concepto bastante abstracto vamos a verlo con ejemplos.

### Arrays

> Supongamos que tenemos un array compuesto por el título de tres libros.

```javascript
var books = [ "Inferno", "Ángeles y demonios", "El símbolo perdido"];
```
> Supongamos que queremos guardar el primer y segundo elemento de la lista en variables, firstBook y secondBook. En ES5 tendríamos lo siguiente: 

```javascript
var firstBook = books[0];
var secondBook = books[1];
```

> Con ES6, aplicando destructuring tendríamos lo siguiente: 

```javascript
let [firstBook, secondBook] = books;
console.log(firstBook) // Inferno.
console.log(secondBook) // Ángeles y demonios.
```

> Como podemos ver, escribimos menos código y a la vez lo hacemos mas legible. 
>
> Ahora supongamos que queremos obtener y guardar el primer libro y el último libro: 

```javascript
let [firstBook, , lastBook] = books;
console.log(firstBook) // Inferno.
console.log(lastBook) // El símbolo perdido.
```

> También podemos asignar valores por defecto de la siguiente forma: 

```javascript
var books = ["Inferno"];

let [firstBook, secondBook="El octavo pasajero"] = books;
console.log(firstBook) // Inferno.
console.log(secondBook) // El octavo pasajero.
```

> ¿Te ha explotado ya la cabeza? ¿No? Vamos con más. 
>
> También podemos usar el destructuring para intercambiar el valor de variables sin utilizar variables temporales. Veamos un ejempo simple:

```javascript
let x = 5;
let y = 8;

// ES5
var tmp = x; 
x = y; 
y = tmp;

// ES6
[x, y] = [y, x];
 ````

> Como podemos ver a parte de ahorrarnos la variable temporal, conseguimos hacerlo en una sola línea. 

## Ejercicios

> 1 - Tenemos una función que nos devuelve el tiempo climático de la semana próxima (de lunes a domingo). De los datos que nos da sólo nos interesa guardar el tiempo climático de martes y jueves, ¿cómo se haría?. Pista, sólo se necesita una línea de código :')

```javascript
function weather() {
  return ["Nublado", "Parcialmente nublado", "Soleado", "Soleado", "Chubascos", "Tormenta", "Nublado"];
}

¿?¿?¿?¿?¿?¿?¿?¿?¿??¿?¿

console.log(martes); // Parcialmente nublado.
console.log(jueves); // Soleado.
````

> 2 - Realizar el ejercicio anterior sin hacer uso de la técnica de destructuring.

> 3 - Supongamos que somos una empresa de publicidad. Para enviar nuestra publicidad necesitamos los datos personales de la gente para enviarles la publicidad. 
>
> Para ello vamos a hacer uso de una API de una empresa que trafica con datos de personas. Esta empresa nos proporciona nombre, primer apellido, segundo apellido, edad, prefijo, teléfono y mail.
>
> A nosotros sólo nos interesa guardar el nombre, primer apellido, prefijo, teléfono y mail. Así podremos enviar nuestra publicidad a través de correos y sms.
>
> La empresa que nos proporciona los datos no nos asegura que el prefijo venga en los datos proporcionados, por lo que tendremos que poner por defecto el prefijo "+34", por si acaso. 
>
> La finalidad del ejercicio es mostrar por pantalla, a través de una función, los datos que nos interesan. 

```javascript
function blackDataMOCKAPI() {
  return [
    ["Francisco", "Pérez", "López", 54, "+34", "657334231", "fran@perez.com"],
    ["Marina", "Carrasco", "Martínez", 34, , "691231778", "mar@carras.com"],
    ["Laura", "Smith", "Donovan", 22, "+12", "143234776", "laura@smith.com"]
  ]
}

function spam() {
  ¿?¿?¿?¿?
}

spam()

// Output: 
// Francisco, Pérez, +34, 657334231, fran@perez.com
// Marina, Carrasco, +34, 691231778, mar@carras.com
// Laura, Smith, +12, 143234776, laura@smith.com
```

