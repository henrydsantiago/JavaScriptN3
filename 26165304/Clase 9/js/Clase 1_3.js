function Alumno(nombre, cursos)
{
    this.nombre = nombre
    this.cursos = cursos
    this.agregarCurso = function(curso){
        this.cursos.push(curso)
    }
}
function Curso(nombre, notas)
{
    this.nombre = nombre
    this.notas = notas
}
var curso1 = new Curso("JavaScript", [10,15,20])
var curso2 = new Curso("TypeScript", [11,15,19])
var Alumno1 = new Alumno("Carlos", [curso1, curso2])
var alumnos = []
alumnos.push(Alumno1)
console.log(alumnos[0].nombre)
console.log(alumnos[0].cursos[0].nombre)
console.log(alumnos[0].cursos[0].notas[0])
console.log(alumnos[0].cursos[0].notas[1])
console.log(alumnos[0].cursos[0].notas[2])
console.log(alumnos[0].cursos[1].nombre)
console.log(alumnos[0].cursos[1].notas[0])
console.log(alumnos[0].cursos[1].notas[1])
console.log(alumnos[0].cursos[1].notas[2])