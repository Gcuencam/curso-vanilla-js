# Destructuring. 
## Objetos.

> El proceso es similar al de los arrays, sólo hay que tener en cuenta, y es muy importante, que las claves del objetos coincidan con el nombre de la variable. 

```javascript
function getPersonData() {
  return {
    name: "Gabriel",
    lastName: "Cuenca",
    age: 23
  }
}

let {name, lastName, age} = getPersonData();

console.log(name); // Gabriel
console.log(lastName); // Cuenca
console.log(age); // 23
```

> Veamos ahora como hacer la asignación en profundidad, es decir, con objetos que tienen dentro de sí otros objetos. 