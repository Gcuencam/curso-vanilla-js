# Asincronía

## Concepto.

> La asincronía, conceptualmente consiste en la posibilidad de realizar más de una tarea concurrentemente en el tiempo sin que se bloqueen entre ellas, esto implica que cada tarea tiene un tiempo de comienzo y fin que no tiene porque ser igual para todas. 

## Peticiones asíncronas. 

> Para poner en práctica el concepto de asíncronía necesitamos realizar peticiones AJAX ("Asynchronous JavaScript And XML"). La clave de la asincronía está en que cuando realicemos la petición AJAX, nuestro código va a seguir ejecutándose y eso es un arma de doble filo, veamos un ejemplo: 

```javascript 
let total = 0; 
const water = 26;
const gas = 30;
const electricity = getElectricity() //AJAX
total = water + gas + electricity;
```

> Aquí el problema está en que si la petición getElectricity() no se realiza lo suficientemente rápido, electricity va a valer undefined cuando hagamos la suma total. Por lo que debemos controlar cuando se ha completado la petición.

## Peticiones AJAX nativas. 

> Javascript dispone de un objeto para hacer peticiones http, denominado XMLHttpRequest. Veamos un ejemplo de como funciona: 

```javascript 
// Creamos el objeto para realizar la petición.
const req = new XMLHttpRequest();
// Configuramos la petición.
req.open('GET', 'http://www.mozilla.org/', true);
// Envíamos la petición.
req.send(null);
// Escuchamos el cambio de estado de la petción.
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200)
      console.log(req.responseText);
     else
      console.log("Error loading page\n");
  }
};
```

> En el ejemplo de la electricidad, la suma total debería hacerse dentro del callback onreadystatechange.

> https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest

> Normalmente no se utiliza el objeto XMLHttpRequest nativamente, sino que se usan librerias de terceros que encapsulan bastante lógica, como axios: https://github.com/axios/axios
