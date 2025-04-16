import fs from "fs";

const arrayOriginal = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false]
const cond = typeof("Diego")

function filtrarDatos(arr, condicion) {
    if (!arr.find((elemento) => typeof(elemento) === condicion))  {
        throw new Error("La condicion no es valida o no se encuentra en el Array");
    }
    const nuevoArray = arr.filter((dato => typeof dato === condicion))
    condicion === 'number' ? nuevoArray.sort((a, b) => a - b) : nuevoArray.sort()
    fs.writeFileSync("doc.txt", nuevoArray.toString())
    return nuevoArray
} 

try {
    console.log(filtrarDatos(arrayOriginal, cond)) 
} catch (error) {
    console.log(error)
}



