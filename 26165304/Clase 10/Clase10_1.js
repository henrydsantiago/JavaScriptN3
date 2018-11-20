var alumno = {
    "nombre"   : "Carlos Albornoz",
    "curso"    : "JavaScript",
    "nota"     : 90,
    "aprobado" : false
}
var objetoStr = '{"producto":"Monitor","color":"Negro","encendido":true}'
//objetoStr = JSON.stringify(alumno)
console.log(JSON.parse(objetoStr))