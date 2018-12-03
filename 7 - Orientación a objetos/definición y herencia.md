# Definción de una clase.

## Definición.

> A partir de ES6 hay una nueva forma de definir tipos de datos, proveniente de la orientación a objetos, las clases. Veamos un ejemplo: 

```javascript
class Vehicle {
  constructor(wheels, power) {
    this.wheels = wheels;
    this.power = power;
    this.isTurnOn = false;
  }

  turnOn() {
    this.isTurnOn = true;
  }

  turnOff() {
    this.isTurnOn = false;
  }
}
```

> En el constructor se definen los atributos propios de la clase. Los métodos de la clase se definen con la forma _shorthand_.

## Herencia.

> La herencia en orientación a objetos, nos permite extender clases previamente creadas, de forma que no tengamos que replicar código. 

> Los parámetros de la clase padre, en este caso _Vehicle_, se pasan en el constructor de la clase hija a través del método _super()_.

```javascript
class Car extends Vehicle{
  constructor(power) {
    super(4, power)
  }

  toString() {
    console.log(`Soy un coche y tengo ${this.wheels} ruedas y ${this.power} caballos de potencia.`);
  }
}

class Motorbike extends Vehicle{
  constructor(power) {
    super(2, power)
  }

  toString() {
    console.log(`Soy una moto y tengo ${this.wheels} ruedas y ${this.power} caballos de potencia.`);
  }
}

const car = new Car(95);
car.toString();
const motorbike = new Motorbike(80);
motorbike.toString();
```

> En javascript no podemos definir una clase abstracta, pero primero, ¿qué es una clase abstracta?. Una clase abstracta es una clase que no se puede instanciar, es decir, no podemos crear objetos a partir de ella. 

> Debido a esto nosotros podemos hacer lo siguiente:

```javascript
const vehicle = new Vehicle(8, 120);
```

> Se puede hacer, pero no tiene mucho sentido porque vehículo es algo muy genérico, nosotros por la calle vemos vehículos, pero vemos algo mas concreto, coches, camiones, motos... etc.

> Como el lenguaje no nos provee de una sintaxis por defecto podemos añadirle lo siguiente al constructor de vehículo: 

```javascript
class Vehicle {
  constructor(wheels, power) {
    if (new.target === Vehicle) {
      throw new TypeError("Cannot construct Abstract instances directly.");
    }
    this.wheels = wheels;
    this.power = power;
    this.isTurnOn = false;
  }

  turnOn() {
    this.isTurnOn = true;
  }

  turnOff() {
    this.isTurnOn = false;
  }
}
```

> Como resumen, todos los métodos y atributos de la clase padre serán heredados por las clases hijas. 

### Ejercicios.

> 1 - Vamos a elaborar un sistema telemático para gestionar una red de Gimnasios, lo iremos ampliando poco a poco en futuros ejercicios. 
>
> Lo primero que debes hacer es crear las siguientes clases: 
>
> - Gimnasio - nombre, CIF, centros (conjunto de gimnasios distribuidos por el país).
> - Centro - dirección, localidad, código postal, gerente (Persona), socios (Socio).
> - Persona - nombre, apellido, edad, sexo, NIF.
> - Socio - Similar a la persona pero además contendrá númeroSocio. El número de socio se debe asignar automáticamente cada vez que se añade un socio nuevo al Centro. 