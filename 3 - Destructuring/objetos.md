# Destructuring. 
### Objetos.

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

> Si queremos que nuestra variable se llame de forma diferente a la clave del objeto podemos usar alias: 

```javascript
function getPersonData() {
  return {
    name: "Gabriel",
    lastName: "Cuenca",
    age: 23
  }
}

let {name: namePerson, lastName: lastNamePerson, age:agePerson} = getPersonData();

console.log(namePerson); // Gabriel
console.log(lastNamePerson); // Cuenca
console.log(agePerson); // 23
```

> Esto nos va a ser útil para hacer "deep destructuring", es decir, con objetos anidados: 

```javascript
function getPersonData() {
  return {
    name: "Gabriel",
    lastName: "Cuenca",
    age: 23,
    dog: {
      name: "Megan",
      age: 1
    }
  }
}

let {name: namePerson, dog: {name: nameDog}} = getPersonData();

console.log(namePerson); // Gabriel
console.log(nameDog); // Megan
```

## Ejercicios

> 1 - Obtener el nombre y apellido del siguiente objeto usando destructuring. Pista, observar bien la estructura, de fuera a dentro. 

```javascript
let complidateDataPerson = {
  arrayProp: [
    "Gabriel",
    { lastName: "Cuenca" }
  ]
};

¿?¿?¿?¿?¿?¿?¿?¿?

console.log(name); // Gabriel
console.log(lastName); // Cuenca
```

> 2 - Realizar el ejercicio número 3 de Arrays, pero usando destructuring de objetos. 

```javascript
function blackDataMOCKAPI() {
  return [
    {
      name: "Francisco",
      firstName: "Pérez",
      secondName: "López",
      age: 54,
      prefix: "+34",
      phone: "657334231",
      mail: "fran@perez.com"
    },
    {
      name: "Marina",
      firstName: "Carrasco",
      secondName: "Martínez",
      age: 34,
      prefix: undefined,
      phone: "691231778",
      mail: "mar@carras.com"
    },
    {
      name: "Laura",
      firstName: "Smith",
      secondName: "Donovan",
      age: 22,
      prefix: "+12", 
      phone: "143234776",
      mail: "laura@smith.com"
    }
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