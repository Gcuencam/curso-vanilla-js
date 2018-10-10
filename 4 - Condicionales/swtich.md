# Condicionales

> Es un tipo de condicional que nos puede servir para sustituir a "if elseif elseif else".
>
> Veamos su sintaxis: 

```javascript
switch(paramToEvalue) {
  case condition1:
    // código
    break;
  case condition2:
    // código
    break;
  case conditionN: 
    // código
    break;
  default: 
    // código
    // Default equivale al else. 
}
```

> Vamos a ver un ejemplo de como convertir un elseif en un switch:

```javascript
function testEI(color) {
  if (color === 'red') {
    return ['apple', 'strawberry'];
  } else if (color === 'yellow') {
    return ['banana', 'pineapple'];
  } else if (color === 'purple') {
    return ['grape', 'plum'];
  } else {
    return [];
  }
}

function testSwitch(color) {
   switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
}
```

> Como podemos ver, en cuanto se complica un poco la lógica, es mas limpio usar un switch. Si queremos que al entrar en un caso no se evaluen los demás, simplemente debemos añadir un break al final del bloque.
>
> Pero vamos a ver algo mejor y es a lo que tenemos que tender, por eficiencia y rapidez. Esto es convertir los swtich a objetos. En el mundillo esto es llamado "Favor map". Veamos como sería con el ejemplo de los colores de frutas:

```javascript
function testSwitch(color) {
   switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
}

function testMap() {
  const fruitColor = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum']
  };
  return fruitColor[color] || [];
}
```

> Magia! Hemos convertido un else if incómodo en una simple función con un objeto. 
