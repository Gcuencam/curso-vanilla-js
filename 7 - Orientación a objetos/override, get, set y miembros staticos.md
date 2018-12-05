## Métodos estáticos.

> Los métodos estáticos son aquellos a los que se puede acceder sin la necesidad de haber instanciado la clase. Veamos un ejemplo:

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
  
  static getDescription() {
    console.log('Esto es un vehículo.');
  }
}

class Car extends Vehicle{
  constructor(power) {
    super(4, power)
  }

  toString() {
    console.log(`Soy un coche y tengo ${this.wheels} ruedas y ${this.power} caballos de potencia.`);
  }
}

Car.getDescription(); // "Esto es un vehículo."
```

> Hemos podido acceder al método sin la necesidad de hacer un _new Car()_. De hecho vemos que los métodos estáticos también se heredan, porque lo hemos definido en la clase _Vehicle_ pero lo hemos llamado desde la clase _Car_.

>

> Pero... ¿qué pasa si definimos en _Car_ un método que se llame exactamente igual?

```javascript
class Car extends Vehicle{
  constructor(power) {
    super(4, power)
  }

  toString() {
    console.log(`Soy un coche y tengo ${this.wheels} ruedas y ${this.power} caballos de potencia.`);
  }
  static getDescription() {
    console.log('Esto es un coche.'); 
  }
}

Car.getDescription(); // Esto es un coche.
```

> Pues que se queda con el método que hemos definido en _Car_, por prioridad. El método que había en _Vehicle_ sigue ahí y podemos acceder a él y usar ambos métodos a través de la palabra _super_.

```javascript
class Car extends Vehicle{
  constructor(power) {
    super(4, power)
  }

  toString() {
    console.log(`Soy un coche y tengo ${this.wheels} ruedas y ${this.power} caballos de potencia.`);
  }
  static getDescription() {
    super.getDescription();
    console.log('Esto es un coche.');
  }
}

Car.getDescription(); 

// Esto es un vehículo.
// Esto es un coche.
```

## Get y Set. 