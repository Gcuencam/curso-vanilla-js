// BOILER

let littleArray = [];
for (let i = 0; i < 1000; i++) {
  littleArray[i] = i;
}

function fn(i) {
  return i += 1;
}


// For let inside.

for (let i=0; i<littleArray.length; i++) {
  fn(littleArray[i]);
}


// For let outside.

let a;
for (a=0; a<littleArray.length; a++) {
  fn(littleArray[a]);
}


// Forin let inside.

for (let index in littleArray) {
  fn(littleArray[index]);
}


// Forin let outside.

let index;
for (index in littleArray) {
  fn(littleArray[index]);
}


// Forof let inside.

for (let number of littleArray) {
  fn(number);
}


// Forof let outside.

let number2;
for (number2 of littleArray) {
  fn(number2);
}


// forEach.

littleArray.forEach((number) => {
  fn(number);
});


// While.

let b = 0;
while (b < littleArray.length) {
  fn(littleArray[b]);
  b++;
}


// Dowhile.

let j = 0;
do {
  fn(littleArray[j]);
  j++;
} while (j < littleArray.length)


// For let outside length cached.

let c, len;
for (c=0, len = littleArray.length; c < len; c++) {
  fn(littleArray[c]);
}


// For let inside length cached. (fastest!) 

for (let i=0, len = littleArray.length; i < len; i++) {
  fn(littleArray[i]);
}


// While length --.


let l = littleArray.length;
while(l--) {
  fn(littleArray[l]);
}


// http://jsben.ch/gqYjD