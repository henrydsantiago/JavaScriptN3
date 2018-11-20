var alumnos = [{
        nombre          : "Carlos",
        cursos          : [
            {
                nombre  : "JavaScript",
                notas   : [12, 15, 18],
            },
            {
                nombre  : "TypeScript",
                notas   : [13, 13, 19],
            }
        ]
    }
]
for (i=0; i<alumnos.length;i++){
    console.log("Nombre del Alumno " + (i+1)+ ": " + alumnos[i].nombre)
    for (j=0; j<alumnos[i].cursos.length; j++){
        console.log("Materia " + (j+1) + ": " + alumnos[i].cursos[j].nombre)
        console.log("Notas:")
        for (k=0; k<alumnos[i].cursos[j].notas.length; k++){
            console.log(alumnos[i].cursos[j].notas[k].toString())
        }
    }
}