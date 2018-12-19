# Asincronía

## Promesas

> Las promesas nacen de la necesidad de poder hacer funciones asíncronas, no sólo peticiones y saber cuando estas funciones terminan de ejecutarse. 

> Una promesa se tiene que resolver siempre, ya sea porque la asincronía se haya resuelto correctamente o no. Lo mejor para ver la sintaxis y ver como funciona es ver un ejemplo: 

```javascript 

function getSportCenters() {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://datos.madrid.es/egob/catalogo/200186-0-polideportivos.json', true);
    req.send(null);
    req.onreadystatechange = function (aEvt) {
      if (req.readyState == 4) {
        if(req.status == 200)
          resolve(req.responseText)
        else
          reject("Aquí podríamos devolver el código de error, el mensaje...")
      }
    };
  });
}

let sportCenters; 

getSportCenters().then(response => {
  sportCenters = response;
  console.log(sportCenters)
}).catch(err => console.log(err));
```

> Ya nos estamos acercando a la forma idónea de hacerlo. Primero fijarnos que getSportCenters devuelve una promesa pendiente de resolución y que no se resuelve hasta que se ejecuta el método resolve o reject, que nos provee el objeto Promise.

> Toda función que devuelva una Promise, tiene asociada dos métodos: then y catch. Then nos dará el resultado de la promesa cuando se haya resuelto con resolve y catch cuando lo haya hecho con reject. 

> Para aclararlo, getSportCenters no nos devulve el listado de centros deportivos, sino una promesa que devuelva a su vez el listado de centros deportivos en caso de que todo haya ido bien, por eso no podríamos hacer esto: 

```javascript
let sportCenters = getSportCenters();
```

> Porque sportCenters contendría una Promise y no es lo que nosotros queremos. 