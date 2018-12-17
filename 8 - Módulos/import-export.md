# Módulos.

> 

## Import / Export.

> A partir de ES6 podemos organizar nuestro código en módulos, en distintos archivos, e irlos importando como dependencias según los vayamos necesitando. 

> Funciona nativamente en navegadores, transpiladores y empaquetadores como webpack. Node aún lo está desarrollando, ya que Node ya tenía su propia forma de importar módulos a través de los require. 

> Nosotros vamos a usarlo en navegador de momento, para evitar problemas de CORS lo primero que debemos hacer es instalar alguna herramienta que nos exponga un servidor local: 

```
$ npm install http-server -g
```

> Ahora sólo debemos ir a la carpeta dónde tengamos nuestro código y ejecutar: 

```
$ http-server
```

> Un archivo puede exportar tantas funciones, clases, variables... como desees o simplemente una por defecto, veamos un ejemplo: 

```javascript
// shapes.js

export class Circle {
  constructor() {
    console.log("Hey, I'm a circle.");
  }
}

export class Rectangle {
  constructor() {
    console.log("Hey, I'm a rectangle.");
  }
}
```

> En este caso exportamos exportamos dos clases, pero, ¿cómo usarlas en otro archivo? Pues simplemente debemos importarlas: 

```javascript
// main.js

import { Circle, Rectangle } from './shapes.js';

const circle = new Circle();
const rectangle = new Rectangle();
```

> La extensión del archivo no siempre es necesaria, depende de donde estés ejecutando tu código. 

> También podríamos importarla Circle y Rectangle a través un alias:

```javascript
// main.js

import * as shapes from './shapes.js';

const circle = new shapes.Circle();
const rectangle = new shapes.Rectangle();
```

> Traduciéndolo sería algo como "importar todo como shapes de shapes.js". Es importante entender esto, porque en la primera forma nosotros elegimos que queremos importar, en la segunda forma importamos todos los módulos que exporte el archivo shapes.js. 

## Default.

> Pero... ¿qué pasa si sólo queremos exponer una sóla función/clase/variable...?
> 
> Lo podemos hacer de la forma anterior o utilizar la exportación por defecto: 

```javascript
// triangle.js

export default class {
  constructor() {
    console.log("Hey, I'm a triangle.");
  }
}
```

> Nótese que la clase no lleva nombre, podría llevarlo, pero no nos va a servir de nada para luego importar la clase: 

```javascript
// main.js

import { Circle, Rectangle } from './shapes.js';
import Triangle from './triangle.js';

const circle = new Circle();
const rectangle = new Rectangle();
const triangle = new Triangle();
```

> Nótese, again, que el nombre que le hemos dado a la clase puede ser cualquiera que nosotros queramos, podría ser Triangle o Goku.

## Módulos en archivos .html.

> Para probar estos ejemplos debemos cargar el archivo main.js en un archivo index.html, pero para ello debemos decirle al navegador que vamos a trabajar con módulos y se hace de la siguiente manera: 

```html
<script type="module" src="./main.js">
```

### Ejercicios. 

> 1 - Refactorizar la arquitectura de la aplicación diviéndola en módulos. La aplicación debe tener un archivo index.html y un archivo main.js que será el punto de entrada de todo nuestro código javascript. Servir la aplicación a través de http-server.