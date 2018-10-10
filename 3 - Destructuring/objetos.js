/* EJERCICIO 1 */

let complidateDataPerson = {
  arrayProp: [
    "Gabriel",
    { lastName: "Cuenca" }
  ]
};

let {arrayProp: [name, {lastName}]} = complidateDataPerson;

console.log(name); // Gabriel
console.log(lastName); // Cuenca


/* EJERCICIO 2 */

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

function spam(name, firstName, prefix, phone, mail) {
  let data = blackDataMOCKAPI();
  for(let i=0; i < data.length; i+=1) {
  	let {name,firstName,prefix='+34',phone,mail} = data[i];
  	console.log(`${name}, ${firstName}, ${prefix}, ${phone}, ${mail}`);
  }
}

spam();

// Output: 
// Francisco, Pérez, +34, 657334231, fran@perez.com
// Marina, Carrasco, +34, 691231778, mar@carras.com
// Laura, Smith, +12, 143234776, laura@smith.com