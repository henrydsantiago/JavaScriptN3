
var alumno= {
    "nombre"    :"Henry D'Santiago",
    "curso"     :"Java Script",
    "nota"      :"100",
    "aprobado"  : false
}
//Convertir el Objeto a String
console.log (JSON.stringify(alumno));

//Se define un string con notacion de objeto
var objetoStr='{"producto":"monitor","color": "blanco", "encendido":true}';
objeto=JSON.parse(objetoStr);
if(objeto.encendido){
    console.log(objeto.color);
}

//convertir de String a Objeto
//console.log(JSON.stringify(sec))




