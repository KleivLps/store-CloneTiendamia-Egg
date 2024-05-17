let nombre = "kleiver", edad = 26, ubicacion = "Lima", profesion = "Arquitecto", hobby = ["Diseñar", "Renderizar", "Programar"];


let isOnline = false 
let pregunta = prompt(`¿Estas conectado? por favor dime "SI" o "NO"`)
let respuesta = pregunta ?? "Ignorado"
if (respuesta.toUpperCase()== "SI" || respuesta.toUpperCase() == "NO" ) {
    if (respuesta.toUpperCase() == "SI" && isOnline === false) {
        isOnline = true;
        if (isOnline) {   
        console.log(`¡Hola de nuevo ${nombre} !Feliz de que te conectes de ${ubicacion}¡ como vas con eso de ser ${profesion}, ¿tus hobbies siguen siendo ${hobby} ? `)
        } else {
            alert("El usuario no se ha conectado, que lastima ")
        }
    } else {
        alert ("No hay nadie conectado o me ignoraron")
    }
} else {
    alert(`${respuesta}`);
}