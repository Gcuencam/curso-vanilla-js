# Condicionales

> Lo realmente importante a la hora de tratar condicionales es saber que es cierto y que es falso. Eso en javascript es un poco extenso, así que vamos a intentar hacerlo fácil.
>
> Hay seis valores falsos... __false__, __null__, __undefined__, __NaN__, __0__, y __""__ . Todo lo demás es verdadero, incluido __[]__ y __{}__.
>
> Vamos a ver algunas reglas de reemplazo para mejorar nuestro código: 

### Exportación
```javascript
if (A) {
  if (B) {
    C
  }
}
// es quivalente a
if (A && B) {
  C
}
```

### Arrays temáticos. Array include.
```javascript
function test(fruit) {
  if (fruit == 'apple' || fruit == 'strawberry') {
    console.log('red');
  }
}

function test(fruit) {
  // extract conditions to array
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  if (redFruits.includes(fruit)) {
    console.log('red');
  }
}
```

