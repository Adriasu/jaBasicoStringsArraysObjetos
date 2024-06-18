// *** Strings ***
// Ej 1: Declara una variable y dale como valor un texto que diga soy un noob.

let string = "soy un noob";

// Ej 2: muestra por consola esa variable, luego cambiala por No entiendo nada y muestrala de nuevo.

console.log(string);
string = "No entiendo nada";
console.log(string);

// Ej 3: Muestra por consola solo la letra t de la variable del ejercicio anterior.

console.log(string[5]);

// Ej 4: Cambia la primera letra por una a e intenta comprender que está pasando en la consola.

string = "Ao entiendo nada";
console.log(string);

// *** Arrays ***
// Ej 1: Crea un array classNames con todos los nombres de tus compañer@s de clase.

const classNames = [
    "Adriana",
    "Gabriela",
    "Jesus Aleman",
    "Andrea",
    "Javmir",
    "Jesus Raad",
  ];

// Ej 2: muestra por consola tu nombre seleccionando el que hay en el array classNames.

console.log(classNames[0]);

// Ej 3: Retoca el array classNames para que tenga dos veces tu nombre, pero sin crear uno nuevo.

classNames[2] = "Adriana";
console.log(classNames);

// Ej 4: Crea un array personalInfo y asiganlé:
// 1º posición: tu nombre.
// 2º posición: tus apellidos separados por un espacio.
// 3º posición: tu lugar de nacimiento.
// 4º posición: tu edad.

const personalInfo = ["Adriana", "Suárez Colmenares", "Bucaramanga", 33];

// Luego, usando el array creado y template literalas, haz que salga un popup que diga la siguiente frase: 
// <nombre> <apellidos> nacido en <lugar de nacimiento> ha conseguido convertirse en desarrollador web a sus <edad> años.

console.log(
    alert (`${personalInfo[0]} ${personalInfo[1]} nacido en ${personalInfo[2]} ha conseguido convertirse en desarrollador web a sus ${personalInfo[3]} años.`)
  );

// *** Objetos ***
// Ej 1: Crea un objeto con las key name, iLikeJs y favFilms -> que será un array de al menos 3 posiciones.
// Todos deberán tener los valores apropiados.

const objests = {
    name: "Adriana",
    iLikeJs: true,
    favFilms: ["Harry Potter", "los Vengadores", "los juegos del hambre"],
  };

// Ej 2: Cambia el valor de la primera posición del array favFilms y compeueba que está cambiado.

objests.favFilms[0] = "divergente"
console.log(objests.favFilms);

// Ej 3: Agrega la key surName y ponle un valor acorde. Comprueba que este correcto.

objests.surName = "Milena"
console.log(objests);

// Ej 4: Elimina la key favFilms del objeto.

delete objests.favFilms
console.log(objests);