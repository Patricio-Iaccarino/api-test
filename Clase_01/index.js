console.log("Hola Mundo!")
console.error("Hola Mundo!")
console.warn("Hola Mundo!")


//Variable en JavaScript
//var esta deprecado
var a = "a"
var b = "b"
var b = "hola"
b = "hola, como estas?"

console.log(b)

//ES6
 
let x = 10
const y = 10

// Operaciones aritmeticas
console.log(x+y)

//Funciones
//Tradicional

function saludo () {
    const saludo = "Bienvenidos"
    console.log(saludo)
}

saludo()
//Funcion tradicional asignada a una variable.
const saludar = function darSaludo() {
    const saludo = "Funcion dar saludo aca"
    console.log(saludo)
    return saludo  
}
console.log(saludar())
saludar()

//Funcion flecha o arrow
const val1 = 5
const val2 = 2


const data =(a, b) => {
    console.log("Suma con parametros: ", a + b)
}
data(val1, val2)

//Scope => ammbito de alcance 

let xyz = "variable xyz"
function imprimirValor(a) {
    let xyz = "Variable XYZ dentro de la funcion"
    console.log("XYZ dentro de la f: ", xyz, a)
}

imprimirValor(xyz)
console.log("XYZ ", xyz)

//Tipos de datos

const test = "TP2"
console.log("Test: " , typeof(test))

//Objeto  => clave.valor
const testobjt = {
    nombre: "Melisa",
    edad: 27,
    color: "Naranja",
    email: null
}
console.log("Test OBJT: " , testobjt)

const testarr = [1,2,3,4,5, null, ["Hola", "Como va?"], undefined, false]
    
console.log("Test OBJT: " , testarr)

//String
//Numero
//Boolean
//Objetos
//Arrays
//Undefined
//Null