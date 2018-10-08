// Ejercicio 1

var mockAPI = function() {
  return [
    {
      title: "Matrix"
    },
    {
      title: "Kill Bill"
    },
    {
      title: "Inception"
    }
  ]
}

var scores = [9, 4, 6];

var ej1Symbol = function(scores) {
  var peliculas = mockAPI();
  for (var i=0; i<peliculas.length; i+=1){
    peliculas[i].score = scores[i];
  };
  console.log('peliculas', peliculas);
}


// Ejercicio 2

var mockAPI = function() {
  return [
    {
      title: "Matrix",
      score: 9.2
    },
    {
      title: "Kill Bill",
      score: 8.9
    },
    {
      title: "Inception",
      score: 8.8
    }
  ]
}

var scores = [9, 4, 6];

var ej2Symbol = function(scores) {
  var peliculas = mockAPI();
  for (var i=0; i<peliculas.length; i+=1){
    peliculas[i].score = scores[i];
  };
  console.log('peliculas', peliculas);
}

// Sobreescribe las notas que había en la API.

// Ejercicio 3

var ej3Symbol = function(scores) {
  const score = Symbol('score');
  var peliculas = mockAPI();
  for (var i=0; i<peliculas.length; i+=1){
    peliculas[i][score] = scores[i];
  };
  console.log('peliculas', peliculas);
}
/*----*/
const score = Symbol('score');
var ej3Symbol = function(scores) {
  var peliculas = mockAPI();
  for (var i=0; i<peliculas.length; i+=1){
    peliculas[i][score] = scores[i];
  };
  console.log('peliculas', peliculas);
}