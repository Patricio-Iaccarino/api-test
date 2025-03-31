//Operadores de comparacion
console.log(10 == "10"); //Igualdad
console.log(10 === "10"); //Igualdad Estricta
console.log(10 != 5);
console.log(10 > 5);
console.log(10 < 5);

//Operadores Logicos
const esMayor = 10 > 5;
const esMenor = 10 < 5;

console.log(esMayor || esMenor); //OR
console.log(esMayor && esMenor); //AND
console.log(!esMenor); //NOT

//Estructuras condicionales
//IF
if (esMayor) {
  console.log("Se cumple la condicion!");
}
//IFELSE
if (esMenor) {
  console.log("Se cumple la condicion!");
} else {
  console.log("No se cumple la condicion!");
}
//IFELSEIF
if (esMayor) {
  console.log("Se cumple la tercera condicion!");
} else if (esMayor === false) {
  console.log("La condicion es False");
} else {
  console.log("Ha ocurrido un error en el servidor");
}

//SWITCH
const key = "azul";

switch (
  key //Necesita que la condicion sea EXACTA
) {
  case "verde":
    console.log("Es verde");
    break;
  case "amarillo":
    console.log("Es amarillo");
    break;
  case "azul":
    console.log("Es azul");
    break;
  default:
    console.log("No Matchea con nada");
    break;
}

// Operador ternario -> (condicion) ? "algo aca" : "algo aca"

const edad = 18;
const compararEdad = edad >= 18 ? "Es mayor de edad. " : "Es menor de edad.";

console.log("Comparacion: ", compararEdad);

//Nullish Coalescing
//Evalua valores nullos o undefined
const saludo1 = null ?? "Hola a todos.";
console.log("Saludo: ", saludo1);

const saludo2 = "Hola Mundo" ?? "Hola a todos.";
console.log("Saludo: ", saludo2);

//Template String - comillas invertidas -> ``

const templStng1 = 10;
const templStng2 = 100;

console.log("Comillas dobles ", templStng1 + " " + templStng2);
console.log("Comillas simples ", templStng2);
console.log(
  `Me permiten unificar el mensaje y el valor de la variable. Ejemplo: ${templStng1} y ${templStng2}`
);

//setInterval y setTimeOut
// setInterval(() => {
//     //Esta logica se repite indefinidamente...
//     console.log("setInterval...")
// }, 3000);

setTimeout(() => {
    //No se repite, pero aplica un delay
    console.log("setTimeout...")
}, 6000);
