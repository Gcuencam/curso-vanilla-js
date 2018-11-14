> Entrar en http://jsben.ch/ y hacer un análisis de cual es la forma más rápida de recorre un array, en este caso un array que contiene datos de tipo Number. Se proporciona el siguiente boilerplate.

```javascript
let littleArray = [];
for (let i = 0; i < 1000; i++) {
  littleArray[i] = i;
}

function fn(i) {
  return i += 1;
}
```
