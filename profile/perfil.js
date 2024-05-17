class MisDatosFisicos {
    constructor(nombre, edad, direccion, altura, peso, hobby){
        this.nombre = nombre 
        this.edad = edad
        this. direccion = direccion
        this.altura = altura
        this.peso = peso
        this. hobby = hobby
    }
}

const datos1 = new MisDatosFisicos("Jose","22",["calle los olvidados", "Mz12","LT1","Independencia"], 1.72 ,"68kg", "jugar futboll")
const datos2 = new MisDatosFisicos("Juan","22",["Urb los geranios", "Mz3","LT18","Miraflores"], 1.92 ,"88kg", "Cantar")
const datos3 = new MisDatosFisicos("Javier","22",["Av. Miguel grau", "Mz7","LT2","Los olivos"], 1.66 ,"62kg", "Correr")
const datos4 = new MisDatosFisicos("Manolito","22",["Jiron Canelita", "Mz11","LT6","Comas"], 1.82 ,"79kg", "Programar")
const datos5 = new MisDatosFisicos("Adrian","22",["aa.hh los independientes", "Mz2","LT4","Arequipa"], 1.70 ,"66kg", "Dibujar")

let MisDatosFisicosTotales = [datos1,datos2,datos3,datos4,datos5]


const selectorId = document.getElementById("perfil")





